import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg'>
      <Link to='/'>
        <h1 className='text-2xl font-bold'>Logo</h1>
      </Link>

      <Link to='/products'>Products</Link>
      <Link to='/about'>About</Link>
    </header>
  );
}
