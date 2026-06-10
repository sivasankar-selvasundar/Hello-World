import React from 'react';
import TestModule from '@/components/modules/TestModule';

export default async function Page() {
  const pageData = {};

  return (
    <main className="flex flex-col relative w-full min-h-screen">
      <TestModule moduleId="inst_1781063758092" serverData={pageData['inst_1781063758092']} data-testid="module-inst_1781063758092" />
    </main>
  );
}
