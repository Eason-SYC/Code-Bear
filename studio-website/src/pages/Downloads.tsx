



function Downloads() {
  const downloadItems = [
    {
      title: 'Code-bear STM32系列A1开发板资料',
      description: 'Code-bear STM32系列A1开发板的原理图、PCB、用户手册及示例代码。',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=A1+Download',
      link: '#' // Placeholder link
    },
    {
      title: 'Code-bear STM32系列A2开发板资料',
      description: 'Code-bear STM32系列A2开发板的原理图、PCB、用户手册及示例代码。',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=A2+Download',
      link: '#' // Placeholder link
    },
    {
      title: 'Code-bear C1全向轮小车资料',
      description: 'Code-bear C1全向轮小车的开源项目代码、组装教程及调试指南。',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=C1+Download',
      link: '#' // Placeholder link
    },
    {
      title: 'Code-bear D1Bear-Link资料',
      description: 'Code-bear D1Bear-Link调试器的驱动、使用说明及固件。',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=D1+Download',
      link: '#' // Placeholder link
    },
    {
      title: 'Code-bear B1编码器TT电机资料',
      description: 'Code-bear B1编码器TT电机的规格书、驱动示例及使用教程。',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=B1+Download',
      link: '#' // Placeholder link
    },
    {
      title: '通用开发环境安装包',
      description: 'STM32开发环境（Keil/CubeIDE）安装包、驱动及配置教程。',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Dev+Env+Download',
      link: '#' // Placeholder link
    }
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">资料下载</h1>
      <div className="row">
        {downloadItems.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img src={item.imageUrl} className="card-img-top" alt={item.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a 
                  href={item.link} 
                  className="btn btn-primary mt-auto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  前往下载
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Downloads;
