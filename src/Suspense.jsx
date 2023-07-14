import Work from './Work';
import ErrorBoundary from './Components/ErrorBoundary';

/*
      <Suspense fallback={<div>suspend...</div>}>
        <Work />
      </Suspense>
*/

function Suspense() {
  return (
    <div>
      <ErrorBoundary fallback={<p>error!</p>}>
        <Work />
      </ErrorBoundary>
    </div>
  );
}

export default Suspense;
