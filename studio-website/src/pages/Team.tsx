

function Team() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">我们的团队</h1>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto mt-3" alt="沈已成" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">沈已成</h5>
              <p className="card-text">全栈工程师 & B站UP主</p>
              <p className="card-text"><small className="text-muted">擅长嵌入式软硬件开发、3D建模，网站开发者与维护者。</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto mt-3" alt="白白" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">白白</h5>
              <p className="card-text">资深硬件工程师</p>
              <p className="card-text"><small className="text-muted">在硬件领域深耕多年, 经验丰富，精通电路设计与调试。</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto mt-3" alt="渚汐" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">渚汐</h5>
              <p className="card-text">资深软件工程师</p>
              <p className="card-text"><small className="text-muted">尤其擅长STM32系列, 代码风格优雅, 追求极致的性能与稳定性。</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
