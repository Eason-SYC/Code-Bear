import React, { useState } from 'react';

function Footer() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isJoinModalOpen, setJoinModalOpen] = useState(false);

  const openModal = (setter: React.Dispatch<React.SetStateAction<boolean>>) => (e: React.MouseEvent) => {
    e.preventDefault();
    setter(true);
  };

  const closeModal = () => {
    setContactModalOpen(false);
    setJoinModalOpen(false);
  };

  return (
    <>
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          <div className="social-icons">
            <a href="https://github.com/Eason-SYC" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://space.bilibili.com/106438109" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Bilibili">
              <svg viewBox="0 0 1024 1024" role="img">
                <path d="M360.896 183.968L269.984 95.872s-14.208-17.472 9.824-37.248c24.16-19.648 25.376-10.912 33.504-5.472s135.2 130.816 135.2 130.816h-87.616z m301.952 3.264l90.912-88.096s14.208-17.472-9.824-37.248c-24.032-19.648-25.376-10.912-33.504-5.472s-135.2 130.816-135.2 130.816h87.616z m341.152 163.104c-3.264-137.984-123.168-164.192-123.168-164.192s-614.336-4.96-742.496 0C10.176 222.304 20 350.336 20 350.336s1.696 274.272-0.128 413.12c13.824 138.848 120.864 160.928 120.864 160.928s42.72 0.864 73.92 0.864c3.264 8.992 5.696 52.544 54.24 52.544 48.416 0 54.24-52.544 54.24-52.544s354.88-1.696 384.352-1.696c1.696 14.816 8.992 54.976 57.536 54.24 48.416-0.864 51.712-57.536 51.712-57.536s16.384-1.696 65.664 0c114.944-21.376 121.6-156.064 121.6-156.064s-1.568-275.872 0-413.856z m-98.912 439.232c0 21.728-17.248 39.456-38.464 39.456H167.2c-21.248 0-38.464-17.6-38.464-39.456V326.336c0-21.728 17.248-39.456 38.464-39.456h699.424c21.248 0 38.464 17.6 38.464 39.456v463.232zM202.4 457.152l205.344-39.456 15.52 77.184-203.648 39.456z m638.976 0l-205.344-39.456-15.648 77.184 203.776 39.456z m-418.08 191.392s45.152 81.312 95.264-26.336c48.416 105.088 101.824 27.904 101.824 27.904l30.336 19.776s-56.672 91.136-131.424 22.208c-63.232 68.928-129.728-21.952-129.728-21.952l33.728-21.6z" />
              </svg>
            </a>
          </div>
          <p className="mb-1">&copy; {new Date().getFullYear()} 源码熊电子工作室. All rights reserved.</p>
          <p className="mb-0">
            <a href="#" onClick={openModal(setContactModalOpen)} className="text-white mx-2">联系我们</a> |
            <a href="#" onClick={openModal(setJoinModalOpen)} className="text-white mx-2">加入我们</a>
          </p>
        </div>
      </footer>

      {/* Contact Us Modal */}
      {isContactModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>
            <h3 className="text-center">联系我们</h3>
            <p className="text-center mt-3">请扫描下方二维码添加我的微信</p>
            <img src="/bear.jpg" alt="微信二维码占位符" className="modal-qr-code" />
          </div>
        </div>
      )}

      {/* Join Us Modal */}
      {isJoinModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>
            <h3 className="text-center">加入我们</h3>
            <p className="mt-3">我们正在寻找优秀的人才！</p>
            <p>请将您的简历发送至以下邮箱，我们会在第一时间与您联系：</p>
            <p className="text-center fw-bold fs-5">your-email@example.com</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;