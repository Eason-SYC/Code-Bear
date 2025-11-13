
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section - bg-light */}
      <div className="py-5 custom-container-80 rounded-3 mb-5"> {/* Changed my-2 to my-1 */}
        <div className="p-5 bg-light border rounded-3"> {/* New: Bordered content with padding and background */}
          <h1 className="display-5 fw-bold">欢迎来到源码熊电子工作室</h1>
          <p className="col-md-8 fs-4">这里是工作室的介绍，展示我们的理念和最新动态。</p>
          <Link to="/team" className="btn btn-primary btn-lg">
            关于我们
          </Link>
        </div>
      </div>

      {/* Services and Projects Links Section - White Background */}
      <div className="mb-5 custom-container-80"> {/* Changed my-2 to my-1 */}
        <div className="row align-items-md-stretch">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>技术支持与服务</h2>
              <p>提供专业的软件开发、硬件设计和技术咨询服务。</p>
              <Link to="/support" className="btn btn-outline-light">
                查看服务
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>最新项目</h2>
              <p>探索我们最新的创新项目和成功案例。</p>
              <Link to="/projects" className="btn btn-outline-secondary">
                查看项目
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* New Project Promotion Section - bg-light */}
      <div className="custom-container-80 bg-light py-5 rounded-3 mb-5"> {/* Removed my-1, added mb-0 */}
        <div className="card mb-0"> {/* Added mb-0 to card */}
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/bear.jpg" className="img-fluid rounded-start h-100" alt="新项目" style={{ objectFit: 'cover' }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">我们的新项目：Code-bear A2 智能主控板</h5>
                <p className="card-text">
                  探索我们最新研发的A2智能主控板。它拥有强大的处理能力、丰富的接口和开源的生态系统，是您进行物联网、机器人和自动化项目开发的理想选择。
                </p>
                <p className="card-text mb-0"> {/* Added mb-0 here */}
                  <Link to="/projects" className="btn btn-primary">
                    了解详情
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Promotion Section - bg-light */}
      <div className="py-5 custom-container-80 rounded-3 mb-5"> {/* Removed my-1, added mt-0 */}
        <div className="p-4 bg-light border rounded-3"> {/* New: Bordered content with padding and background */}
          <h2 className="display-6 fw-bold text-center mb-0">配套视频教程</h2> {/* Changed mb-4 to mb-0 */}
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="ratio ratio-16x9">
                <iframe
                  src="//player.bilibili.com/player.html?bvid=BV1jS411P7AB"
                  scrolling="no"
                  frameBorder="no"
                  allowFullScreen={true}
                  title="Embedded Bilibili Video"
                >
                </iframe>
              </div>
            </div>
            <div className="col-md-5 mt-4 mt-md-0">
              <h4 className="fw-bold">手把手教你学会STM32 HAL库（2025年版）</h4>
              <p>适用于源码熊推出的STM32F103C8T6白色款和蓝色款。</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
