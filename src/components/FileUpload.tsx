import { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import { uploadFile } from '../utils/storage';

const FileUpload = ({ value, onChange, folder = 'materials', accept = '.pdf,.doc,.docx,.ppt,.pptx' }: any) => {
  const { t, lang } = useLanguage();
  const { showToast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef(null);

  const handleFile = async (file) => {
    if (!file) return;
    if (file.size > 20 * 1024 * 1024) {
      showToast(lang === 'ko' ? '파일 크기는 20MB 이하만 가능합니다.' : 'File size must be under 20MB.', 'error');
      return;
    }
    setUploading(true);
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) { clearInterval(progressInterval); return 90; }
        return prev + Math.random() * 15;
      });
    }, 200);
    try {
      const url = await uploadFile(file, folder);
      clearInterval(progressInterval);
      setProgress(100);
      onChange(url);
      showToast(t('auth.uploadComplete') || '업로드 완료', 'success');
    } catch (err: any) {
      clearInterval(progressInterval);
      console.error('Upload error:', err);
      showToast(err.message, 'error');
    } finally {
      setTimeout(() => { setUploading(false); setProgress(0); }, 300);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
  };

  const getFileName = (url) => {
    if (!url) return '';
    try {
      return decodeURIComponent(url.split('/').pop());
    } catch {
      return url.split('/').pop();
    }
  };

  return (
    <div className="image-upload-wrapper">
      {value ? (
        <div className="file-upload-preview">
          <div className="file-preview-info">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span className="file-preview-name">{getFileName(value)}</span>
          </div>
          <button
            type="button"
            className="image-upload-remove"
            onClick={() => onChange('')}
          >
            {lang === 'ko' ? '파일 삭제' : 'Remove File'}
          </button>
        </div>
      ) : (
        <div
          className={`image-upload-zone ${dragOver ? 'drag-over' : ''}`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileRef.current?.click()}
        >
          {uploading ? (
            <div className="upload-progress-wrapper">
              <div className="upload-progress-bar">
                <div className="upload-progress-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
              </div>
              <span className="upload-progress-text">{t('auth.uploading')} {Math.round(Math.min(progress, 100))}%</span>
            </div>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <span>{lang === 'ko' ? '파일을 드래그하거나 클릭하여 업로드 (최대 20MB)' : 'Drag or click to upload a file (max 20MB)'}</span>
            </>
          )}
          <input
            ref={fileRef}
            type="file"
            accept={accept}
            onChange={handleInputChange}
            style={{ display: 'none' }}
          />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
