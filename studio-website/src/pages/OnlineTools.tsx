

function OnlineTools() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">在线工具</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">在线烧录工具</h5>
              <p className="card-text">跳转到我们的在线烧录平台，方便快捷地烧录您的设备。</p>
              <a href="https://example.com/burner" target="_blank" rel="noopener noreferrer" className="btn btn-primary">前往烧录</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">数据分析工具</h5>
              <p className="card-text">使用我们的在线数据分析工具，实时查看和分析您的项目数据。</p>
              <a href="https://example.com/analytics" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">开始分析</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineTools;
