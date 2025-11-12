

function Team() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">我们的团队</h1>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto mt-3" alt="Team Member" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">张三</h5>
              <p className="card-text">创始人 & CEO</p>
              <p className="card-text"><small className="text-muted">专注于产品设计与市场拓展。</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto mt-3" alt="Team Member" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">李四</h5>
              <p className="card-text">首席工程师</p>
              <p className="card-text"><small className="text-muted">精通嵌入式开发与物联网技术。</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto mt-3" alt="Team Member" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">王五</h5>
              <p className="card-text">UI/UX 设计师</p>
              <p className="card-text"><small className="text-muted">负责用户界面和用户体验设计。</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
