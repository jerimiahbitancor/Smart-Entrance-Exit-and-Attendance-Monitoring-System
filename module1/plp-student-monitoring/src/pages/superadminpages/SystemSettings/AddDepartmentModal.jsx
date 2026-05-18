// AddDepartmentModal.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../../../css/GlobalModal.css';

function AddDepartmentModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    dept_code: '',
    dept_name: '',
    status: 'Active'
  });
  const [isAdding, setIsAdding] = useState(false);
  const [logoBase64, setLogoBase64] = useState(null);

  const compressImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          let width = img.width;
          let height = img.height;
          const maxDim = 150;
          if (width > maxDim) {
            height = (height * maxDim) / width;
            width = maxDim;
          }
          if (height > maxDim) {
            width = (width * maxDim) / height;
            height = maxDim;
          }
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/png', 0.7));
        };
      };
      reader.onerror = reject;
    });
  };

  const handleLogoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.match('image.*')) {
        Swal.fire({
          icon: 'warning',
          title: 'Invalid File',
          text: 'Please select an image file.',
        });
        return;
      }
      const base64 = await compressImage(file);
      setLogoBase64(base64);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = async () => {
    if (isAdding) return;

    if (!form.dept_code.trim() || !form.dept_name.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in Department Code and Department Name.',
        confirmButtonColor: '#3085d6'
      });
      return;
    }

    setIsAdding(true);

    Swal.fire({
      title: 'Adding Department...',
      text: 'Please wait',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    try {
      const response = await fetch('http://localhost:5000/api/departments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          logo: logoBase64
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to add department');
      }

      await Swal.fire({
        icon: 'success',
        title: 'Department Added!',
        text: `${form.dept_name} has been added successfully.`,
        timer: 2000,
        showConfirmButton: false
      });

      onClose();
      if (onAdd) onAdd();
    } catch (error) {
      console.error('Error adding department:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed!',
        text: error.message || 'Could not add department. It might already exist.',
        confirmButtonColor: '#3085d6'
      });
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Add New Department</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <div className="modal-grid-2">
            <div className="modal-field">
              <label className="modal-label">Department Code <span className="required">*</span></label>
              <input
                type="text"
                name="dept_code"
                value={form.dept_code}
                onChange={handleChange}
                className="modal-input"
                placeholder="e.g. CCS"
                autoFocus
              />
            </div>

            <div className="modal-field">
              <label className="modal-label">Status <span className="required">*</span></label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="modal-select"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="modal-field">
            <label className="modal-label">Department Name <span className="required">*</span></label>
            <input
              type="text"
              name="dept_name"
              value={form.dept_name}
              onChange={handleChange}
              className="modal-input"
              placeholder="e.g. College of Computer Studies"
            />
          </div>

          <div className="modal-field">
            <label className="modal-label">Department Logo</label>
            <div className="dept-logo-upload" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '5px' }}>
              <div className="logo-preview" style={{ width: '60px', height: '60px', border: '1px solid #ddd', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#f9f9f9' }}>
                {logoBase64 ? (
                  <img src={logoBase64} alt="Logo preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                ) : (
                  <span style={{ fontSize: '10px', color: '#999' }}>No Logo</span>
                )}
              </div>
              <div className="upload-controls">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  id="dept-logo-input"
                  style={{ display: 'none' }}
                />
                <label htmlFor="dept-logo-input" className="modal-btn" style={{ padding: '5px 10px', fontSize: '12px', background: '#f0f0f0', color: '#333', border: '1px solid #ccc', cursor: 'pointer', borderRadius: '4px' }}>
                  Choose Logo
                </label>
              </div>
            </div>
            <small style={{ color: '#888', fontSize: '11px', marginTop: '5px', display: 'block' }}>
              Upload a logo to represent this department in reports.
            </small>
          </div>
        </div>

        <div className="modal-footer">
          <button className="modal-btn modal-btn-cancel" onClick={onClose}>Cancel</button>
          <button 
            className="modal-btn modal-btn-save" 
            onClick={handleAdd} 
            disabled={isAdding}
          >
            {isAdding ? 'Adding...' : 'Add Department'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddDepartmentModal;