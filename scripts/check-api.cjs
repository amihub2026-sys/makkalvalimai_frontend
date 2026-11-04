/* Optional live read-only smoke test. Start the UNCHANGED backend before running. */
const base = (process.env.MV_API_BASE || 'http://localhost:5000/api').replace(/\/$/, '');
const expected = {bootstrap:'object',articles:'array',issues:'array',alerts:'array',polls:'array',ads:'array',settings:'object'};
(async () => {
  let failed = 0;
  for (const [route, type] of Object.entries(expected)) {
    const url = `${base}/public/${route}`;
    try {
      const response = await fetch(url, {signal:AbortSignal.timeout(5000)});
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const body = await response.json();
      const valid = type==='array'?Array.isArray(body):body && typeof body==='object' && !Array.isArray(body);
      if (!valid) throw new Error(`Expected JSON ${type}`);
      console.log('PASS',url);
    } catch (error) { failed++; console.error('FAIL',url,error.message); }
  }
  if (failed) { console.error(`${failed} live API routes could not be verified.`);process.exitCode=1; }
  else console.log('Public API check passed. Admin workflows still require a secure signed-in browser session.');
})();
