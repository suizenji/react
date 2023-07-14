import Work from './Work';

function Suspense() {
  return (
    <div>
      <Suspense fallback={<div>suspend...</div>}>
        <Work />
      </Suspense>
    </div>
  );
}

export default Suspense;
