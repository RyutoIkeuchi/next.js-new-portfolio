import Link from 'next/link'

export const Header = () => {
  return (
    <div>
      <Link href="/">
       <a>Portfolio</a>
      </Link>
			<Link href="/career">
				<a>Career</a>
			</Link>
			<Link href="/skill">
				<a>Skill</a>
			</Link>
			<Link href="/works">
				<a>Works</a>
			</Link>
			<Link href="/contact">
				<a>Contact</a>
			</Link>
		</div>
	);
}