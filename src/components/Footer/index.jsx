export default function Footer() {
  return (
    <footer className="text-center text-body-secondary py-3 my-4 border-top">
      <div className="text-center text-body-secondary">
        <span>© {new Date().getFullYear()} Matheus Ricelly</span>
        <div>
          <a
            href="http://fsenaweb.dev/"
            className="text-black text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
            data-testid={"link"}
          >
            fsenaweb.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
