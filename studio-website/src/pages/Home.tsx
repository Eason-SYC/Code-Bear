import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets/images';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

// Data for the carousel and its feature cards
const carouselData = [
  {
    image: images.carouselImage1,
    alt: 'Code-bear STM32系列A1开发板',
    caption: 'Code-bear STM32系列A1开发板',
    link: '/projects',
    cards: [
      { title: '强大的主控', text: '搭载STM32芯片，性能卓越，为您的项目提供强大动力。' },
      { title: '丰富的外设', text: '支持多种传感器和执行器，轻松扩展无限可能。' },
      { title: '完善的生态', text: '提供完整的开发工具、文档和社区教程支持。' },
    ]
  },
  {
    image: images.carouselImage2,
    alt: 'Code-bear STM32系列A2开发板',
    caption: 'Code-bear STM32系列A2开发板',
    link: '/projects',
    cards: [
        { title: '更强性能', text: '相较于A1，A2拥有更强的性能和更多的外设接口。' },
        { title: '模块化设计', text: '核心板和底板分离设计，方便用户根据需求定制。' },
    ]
  },
  {
    image: images.carouselImage3,
    alt: 'Code-bear B1编码器TT电机',
    caption: 'Code-bear B1编码器TT电机',
    link: '/projects',
    cards: [
      { title: '高精度编码器', text: '配备高精度霍尔编码器，实现精准的速度和位置闭环控制。' },
    ]
  },
  {
    image: images.carouselImage1, // Placeholder image 1
    alt: 'Code-bear C1全向轮小车',
    caption: 'Code-bear C1全向轮小车',
    link: '/projects',
    cards: [
      { title: '开源项目', text: '基于STM32的开源全向轮小车项目。' },
    ]
  },
  {
    image: images.carouselImage2, // Placeholder image 2
    alt: 'Code-bear D1Bear-Link',
    caption: 'Code-bear D1Bear-Link',
    link: '/projects',
    cards: [
      { title: '多功能工具', text: '多功能调试器和下载器。' },
    ]
  }
];

function Home() {
  // State for the carousel
  const [activeIndex, setActiveIndex] = React.useState(0);
  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  // State for the interactive "Advantages" section
  const [hoveredAdvantage, setHoveredAdvantage] = React.useState(0);
  const [displayedAdvantage, setDisplayedAdvantage] = React.useState(0);
  const [isAdvantageVisible, setIsAdvantageVisible] = React.useState(true);

  const advantages = [
    { title: '技术全面', description: '我们精通从前端到后端的全栈技术，以及嵌入式硬件设计，能够为您提供一站式解决方案。' },
    { title: '开源精神', description: '我们拥抱开源，积极贡献社区，所有项目都提供完善的文档和教程，方便您学习和使用。' },
    { title: '优质服务', description: '我们会对自己的产品负责。' },
    { title: '配套教程', description: '提供详细的视频和文档教程，帮助您快速上手。' },
  ];

  React.useEffect(() => {
    setIsAdvantageVisible(false);
    const timer = setTimeout(() => {
      setDisplayedAdvantage(hoveredAdvantage);
      setIsAdvantageVisible(true);
    }, 200); // Corresponds to animation duration
    return () => clearTimeout(timer);
  }, [hoveredAdvantage]);

  return (
    <>
      {/* Hero Section with Carousel */}
      <Carousel 
        className="hero-carousel" 
        interval={5000} 
        activeIndex={activeIndex}
        onSelect={handleSelect}
      >
        {carouselData.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-img"
              src={slide.image}
              alt={slide.alt}
            />
            <Carousel.Caption className="carousel-caption-custom">
              <h3>{slide.caption}</h3>
              <Link to={slide.link} className="btn btn-primary btn-lg carousel-button">
                了解更多
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Feature Cards Section */}
      <Container className="my-5" data-aos="fade-up">
        <Row className="justify-content-center g-4">
          {carouselData[activeIndex].cards.map((card, index) => (
            <Col md={6} lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <a href="#" className="feature-card">
                <div className="feature-card-title">
                  <span>{card.title}</span>
                  <ArrowRight className="feature-card-arrow" />
                </div>
                <span className="feature-card-text">{card.text}</span>
              </a>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ===== About Us Section - Hero Style ===== */}
      <div className="py-5" style={{ 
          background: 'linear-gradient(45deg, #2a2a2a, #3c3c3c)', 
          color: '#f0f0f0' 
      }}>
          <div className="container text-center py-5" data-aos="fade-in">
              <img 
                  src={images.bear} 
                  className="mb-4" 
                  alt="源码熊工作室 Logo" 
                  style={{ maxWidth: '150px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))' }} 
              />
              <h1 className="display-5 fw-bold">源码熊电子工作室</h1>
              <div className="col-lg-8 mx-auto">
                  <p className="lead mb-4">
                      始于2024年，我们致力于提供卓越的软硬件解决方案和开源技术分享。我们是一群对技术充满热情的工程师和设计师，相信代码和硬件的力量可以改变世界。
                  </p>
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                      <Link to="/team" className="btn btn-primary btn-lg px-4 gap-3">
                          了解更多关于我们
                      </Link>
                      <Link to="/projects" className="btn btn-outline-light btn-lg px-4">
                          查看我们的项目
                      </Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="container">
        {/* Section 1: Our New Products */}
        <div id="products" className="custom-container-80 my-5 py-5" data-aos="fade-up">
          <div className="text-center mb-5">
            <h2 className="fw-bold">我们的新产品</h2>
            <p className="text-muted">探索我们最新的创新成果</p>
          </div>
          <div className="row g-4">
            {[
              { title: 'Code-bear A2 主控板', description: '强大的处理能力、丰富的接口和开源的生态系统。', img: images.bear },
              { title: '智能小车套件', description: '基于A2主控板，快速搭建属于你自己的智能小车。', img: images.bear },
              { title: '物联网传感器模块', description: '高精度、低功耗，适用于各种物联网应用场景。', img: images.bear },
              { title: 'FPGA开发学习板', description: '从零开始，带你进入FPGA的精彩世界。', img: images.bear },
            ].map((product, index) => (
              <div className="col-md-6" key={index}>
                <div className="card h-100">
                  <div className="row g-0 h-100">
                    <div className="col-4">
                      <img src={product.img} className="img-fluid rounded-start h-100" alt={product.title} style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="col-8 d-flex flex-column">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{product.title}</h5>
                        <p className="card-text text-muted">{product.description}</p>
                      </div>
                      <div className="card-footer bg-transparent border-0 mt-auto">
                        <Link to="/projects" className="btn btn-sm btn-outline-primary">
                          了解详情
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Our Advantages (Interactive) */}
        <div id="advantages" className="custom-container-80 my-5 py-5" data-aos="fade-up">
          <div className="text-center mb-5">
            <h2 className="fw-bold">我们的特色</h2>
            <p className="text-muted">我们提供的服务与支持</p>
          </div>
          <div>
            <div className="list-group list-group-horizontal-lg mb-4">
              {advantages.map((adv, index) => (
                <button
                  key={index}
                  className={`list-group-item list-group-item-action text-center ${hoveredAdvantage === index ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredAdvantage(index)}
                >
                  <h5 className="mb-1">{adv.title}</h5>
                </button>
              ))}
            </div>
            <div className="card">
              <div className="card-body p-5" style={{minHeight: '150px'}}>
                <div className={`advantage-content ${isAdvantageVisible ? 'advantage-content-visible' : ''}`}>
                  <p className="fs-5 text-muted text-center">{advantages[displayedAdvantage].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Our Services */}
        <div id="services" className="custom-container-80 my-5 py-5" data-aos="fade-up">
          <div className="text-center mb-5">
            <h2 className="fw-bold">我们的服务</h2>
            <p className="text-muted">我们提供全方位的技术支持</p>
          </div>
          <div className="row g-4">
            {[
              { title: '硬件设计', description: '从原理图到PCB，提供专业硬件设计与制造服务。', link: '/support' },
              { title: '软件开发', description: '定制化Web应用、移动App和桌面软件开发。', link: '/support' },
              { title: '嵌入式方案', description: '提供基于STM32、ESP32等平台的嵌入式解决方案。', link: '/support' },
              { title: '技术咨询', description: '为您的项目提供专业的技术评估和咨询。', link: '/support' },
            ].map((service, index) => (
              <div className="col-md-6" key={index}>
                <div className="card h-100 p-4 text-center">
                  <div className="card-body d-flex flex-column">
                    <h4 className="card-title fw-bold">{service.title}</h4>
                    <p className="card-text text-muted flex-grow-1">{service.description}</p>
                    <Link to={service.link} className="btn btn-outline-primary mt-auto">
                      了解详情
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Latest Announcements */}
        <div id="announcements" className="custom-container-80 my-5 py-5" data-aos="fade-up">
          <div className="text-center mb-5">
            <h2 className="fw-bold">掌握我们的最新动态</h2>
            <p className="text-muted">关注我们的项目更新、活动和教程发布</p>
          </div>
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Code-bear A2 主控板正式发布</h5>
                <small>3天前</small>
              </div>
              <p className="mb-1">我们很高兴地宣布，经过长时间的研发和测试，Code-bear A2 智能主控板现已正式上市！</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">网站全新改版上线</h5>
                <small className="text-muted">1周前</small>
              </div>
              <p className="mb-1">为了提供更好的用户体验，我们的官方网站于今日完成全新改版。</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">开源社区贡献者招募</h5>
                <small className="text-muted">2周前</small>
              </div>
              <p className="mb-1">我们正在寻找对开源充满热情的开发者加入我们的社区，共同打造更优秀的开源项目。</p>
            </a>
          </div>
        </div>

        {/* Section 5: Excellent Teaching Videos */}
        <div id="news" className="custom-container-80 my-5 py-5" data-aos="fade-up">
          <div className="text-center mb-5">
            <h2 className="fw-bold">优秀的教学视频</h2>
            <p className="text-muted">关注我们的最新进展和视频教程</p>
          </div>
          <div className="card">
            <div className="card-body p-4">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="//player.bilibili.com/player.html?bvid=BV1jS411P7AB"
                      scrolling="no"
                      frameBorder="no"
                      allowFullScreen={true}
                      title="Embedded Bilibili Video"
                    ></iframe>
                  </div>
                </div>
                <div className="col-md-5 mt-4 mt-md-0">
                  <h4 className="fw-bold">手把手教你学会STM32 HAL库（2025年版）</h4>
                  <p className="text-muted">适用于源码熊推出的STM32F103C8T6白色款和蓝色款。</p>
                  <a href="https://space.bilibili.com/..." target="_blank" rel="noopener noreferrer" className="btn btn-danger">
                    前往B站查看更多
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: User Comments */}
        <div id="testimonials" className="my-5 py-5" data-aos="fade-up">
          <div className="text-center mb-5">
            <h2 className="fw-bold">用户有话说</h2>
            <p className="text-muted">您的B站视频评论有机会在这里出现哦！</p>
          </div>
          <div className="scrolling-container">
            <div className="scrolling-wrapper">
              <div className="scrolling-track track-1">
                {[
                  { name: '某科技公司', quote: '团队非常专业，交付的项目质量远超预期。' },
                  { name: '一位创客爱好者', quote: '开源教程对我帮助很大，让我快速上手了嵌入式开发。' },
                  { name: '某硬件初创企业', quote: '主控板性能稳定，生态丰富，市场反馈很好。' },
                ].flatMap(i => [i, i]).map((testimonial, index) => (
                  <div className="scrolling-card" key={index}>
                    <div className="card h-100"><div className="card-body"><p className="fst-italic">"{testimonial.quote}"</p><footer className="text-end fw-bold">- {testimonial.name}</footer></div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="scrolling-wrapper">
              <div className="scrolling-track track-2">
                {[
                  { name: 'B站用户*小明*', quote: '这个教程太棒了！' },
                  { name: 'Github用户*CodeMaster*', quote: '代码质量很高，学习了！' },
                  { name: '电子发烧友', quote: '期待更多FPGA相关的教程！' },
                ].flatMap(i => [i, i]).map((testimonial, index) => (
                  <div className="scrolling-card" key={index}>
                    <div className="card h-100"><div className="card-body"><p className="fst-italic">"{testimonial.quote}"</p><footer className="text-end fw-bold">- {testimonial.name}</footer></div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="scrolling-wrapper">
              <div className="scrolling-track track-3">
                {[
                  { name: '开发者', quote: '文档清晰，代码易读，非常感谢！' },
                  { name: '学生', quote: '跟着视频做出了第一个项目，太有成就感了！' },
                  { name: '项目经理', quote: '沟通顺畅，交付准时，是值得信赖的合作伙伴。' },
                ].flatMap(i => [i, i]).map((testimonial, index) => (
                  <div className="scrolling-card" key={index}>
                    <div className="card h-100"><div className="card-body"><p className="fst-italic">"{testimonial.quote}"</p><footer className="text-end fw-bold">- {testimonial.name}</footer></div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 7: Contact Us */}
        <div id="contact" className="custom-container-80 my-5 py-5" data-aos="fade-up">
          <div className="text-center">
            <h2 className="fw-bold">联系我们</h2>
            <p className="fs-4 text-muted">准备好开始您的下一个项目了吗？</p>
            <Link to="/support" className="btn btn-primary btn-lg mt-3">
              立即获取支持
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
