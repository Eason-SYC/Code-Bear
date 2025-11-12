

function Projects() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">项目介绍</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Project Image" />
            <div className="card-body">
              <h5 className="card-title">智能家居系统</h5>
              <p className="card-text">我们开发了一套完整的智能家居系统，实现设备互联互通，提供便捷的智能生活体验。</p>
              <a href="https://example.com/project/smarthome" target="_blank" rel="noopener noreferrer" className="btn btn-primary">查看详情</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Project Image" />
            <div className="card-body">
              <h5 className="card-title">AI 视觉识别模块</h5>
              <p className="card-text">基于深度学习的AI视觉识别模块，可应用于安防监控、智能制造等领域。</p>
              <a href="https://example.com/project/aivision" target="_blank" rel="noopener noreferrer" className="btn btn-primary">查看详情</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
