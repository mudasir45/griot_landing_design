import Link from "next/link";

export default function CourseNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4">
      <div className="text-center max-w-md">
        <h1 className="font-display font-extrabold text-4xl text-navy mb-3">
          Course Not Found
        </h1>
        <p className="text-body mb-6">
          The course you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/courses"
          className="btn inline-flex items-center justify-center px-6 py-3 font-bold bg-primary text-white border-primary-dark"
        >
          View Programs
        </Link>
      </div>
    </div>
  );
}
