

function Downloads() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">资料下载</h1>
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action" aria-current="true">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">项目资料包 v1.0</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">包含项目设计文档、原理图、PCB文件等。</p>
          <small>大小: 120MB</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">工具软件 v2.1</h5>
            <small className="text-muted">1 week ago</small>
          </div>
          <p className="mb-1">最新版开发工具，支持Windows/macOS。</p>
          <small className="text-muted">大小: 50MB</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">固件更新包 v1.5</h5>
            <small className="text-muted">2 weeks ago</small>
          </div>
          <p className="mb-1">设备固件更新，修复已知bug并提升性能。</p>
          <small className="text-muted">大小: 10MB</small>
        </a>
      </div>
    </div>
  );
}

export default Downloads;
