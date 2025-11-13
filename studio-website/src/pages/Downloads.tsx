

function Downloads() {
  const downloadItems = [
    {
      title: '蓝色款A1',
      description: '适用于蓝色外壳的A1型号主控板的全套资料，包含原理图、PCB文件和设计文档。',
      imageUrl: '/bear.jpg', // Vite serves files from the public directory at the root
      link: 'https://pan.baidu.com/s/1lAQ6POfyYnCzMSOC0vxbwA?pwd=1234'
    },
    {
      title: '白色款A1',
      description: '适用于白色外壳的A1型号主控板的全套资料，包含原理图、PCB文件和设计文档。',
      imageUrl: '/bear.jpg',
      link: 'https://pan.baidu.com/s/1_lf1-fcheyLFmR6_EM72FQ?pwd=cy8p'
    },
    {
      title: '环境安装资料',
      description: '开发环境搭建指南，包含所需的驱动、第三方软件和详细的配置说明。',
      imageUrl: '/bear.jpg',
      link: 'https://pan.baidu.com/s/1YA8RkoAnZuVamETE_tgkCg?pwd=pt8i'
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
