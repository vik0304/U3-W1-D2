function Footer() {
  const footerYear = function () {
    return new Date().getFullYear();
  };
  return (
    <footer>
      <div className="text-center text-light py-5 bg-secondary">
        EpiBooks - {footerYear()}
      </div>
    </footer>
  );
}

export default Footer;
