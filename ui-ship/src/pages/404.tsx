import Link from "next/link";

function notFound404() {
  return (
    <>
      <div className="text-center pt-20 mx-auto">
        <h2 className="text-6xl font-bold">404</h2>
        <p className="text-2xl ml-1 mb-8">not found.</p>
        <Link href="/" passHref>
          TOPページへ戻る
        </Link>
      </div>
    </>
  );
}

export default notFound404;
