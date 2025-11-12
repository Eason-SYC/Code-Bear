

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} 源码熊电子工作室. All rights reserved.</p>
        <p>
          <a href="#" className="text-white mx-2">联系我们</a> |
          <a href="#" className="text-white mx-2">加入我们</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
