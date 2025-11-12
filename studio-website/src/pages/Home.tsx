

function Home() {
  return (
    <div className="container my-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">欢迎来到源码熊电子工作室</h1>
          <p className="col-md-8 fs-4">这里是工作室的介绍，展示我们的理念和最新动态。</p>
          <button className="btn btn-primary btn-lg" type="button">了解更多</button>
        </div>
      </div>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h2>我们的服务</h2>
            <p>提供专业的软件开发、硬件设计和技术咨询服务。</p>
            <button className="btn btn-outline-light" type="button">查看服务</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>最新项目</h2>
            <p>探索我们最新的创新项目和成功案例。</p>
            <button className="btn btn-outline-secondary" type="button">查看项目</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
