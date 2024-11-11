export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-foreground border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
