<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once("../config/database.php");

$method = $_SERVER["REQUEST_METHOD"];

// Handle CORS preflight
if ($method === "OPTIONS") {
    http_response_code(200);
    exit;
}

// ======================================================
// GET DEPARTMENTS
// ======================================================
if ($method === "GET") {
    try {
        $q = "SELECT id, dept_code, dept_name, logo, status, created_at, updated_at FROM departments ORDER BY dept_name";
        $stmt = $conn->prepare($q);
        $stmt->execute();
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    } catch (Exception $e) {
        echo json_encode([
            "error" => true,
            "message" => $e->getMessage()
        ]);
    }
    exit;
}

// ======================================================
// ADD DEPARTMENT
// ======================================================
if ($method === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $dept_name = trim($data["dept_name"] ?? "");
    $dept_code = trim($data["dept_code"] ?? "");
    $logo = $data["logo"] ?? null;

    if ($dept_name === "") {
        echo json_encode([
            "error" => true,
            "message" => "Department name is required"
        ]);
        exit;
    }

    try {
        $insert = $conn->prepare("INSERT INTO departments (dept_code, dept_name, logo) VALUES (?, ?, ?)");
        $insert->execute([$dept_code, $dept_name, $logo]);

        echo json_encode([
            "success" => true,
            "message" => "Department added successfully"
        ]);
    } catch (Exception $e) {
        echo json_encode([
            "error" => true,
            "message" => $e->getMessage()
        ]);
    }
    exit;
}

// ======================================================
// UPDATE DEPARTMENT
// ======================================================
if ($method === "PUT") {
    $id = $_GET["id"] ?? null;
    $data = json_decode(file_get_contents("php://input"), true);
    $dept_name = trim($data["dept_name"] ?? "");
    $dept_code = trim($data["dept_code"] ?? "");
    $logo = $data["logo"] ?? null;

    if (!$id || $dept_name === "") {
        echo json_encode([
            "error" => true,
            "message" => "Department ID and name are required"
        ]);
        exit;
    }

    try {
        $update = $conn->prepare("UPDATE departments SET dept_name = ?, dept_code = ?, logo = ? WHERE id = ?");
        $update->execute([$dept_name, $dept_code, $logo, $id]);

        echo json_encode([
            "success" => true,
            "message" => "Department updated successfully"
        ]);
    } catch (Exception $e) {
        echo json_encode([
            "error" => true,
            "message" => $e->getMessage()
        ]);
    }
    exit;
}

// ======================================================
// DELETE DEPARTMENT
// ======================================================
if ($method === "DELETE") {
    $id = $_GET["id"] ?? null;

    if (!$id) {
        echo json_encode([
            "error" => true,
            "message" => "Department ID is required"
        ]);
        exit;
    }

    try {
        $del = $conn->prepare("DELETE FROM departments WHERE id = ?");
        $del->execute([$id]);

        echo json_encode([
            "success" => true,
            "message" => "Department removed successfully"
        ]);
    } catch (Exception $e) {
        echo json_encode([
            "error" => true,
            "message" => $e->getMessage()
        ]);
    }
    exit;
}

echo json_encode([
    "error" => true,
    "message" => "Invalid request method"
]);
