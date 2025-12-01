import scrape from 'website-scraper';

scrape({
  urls: ['https://www.upmenu.com'],
  directory: 'upmenu',
  recursive: true,
  maxDepth: 2,
  
  // Filter out invalid URLs before they're processed
  urlFilter: (url) => {
    if (!url) return false;
    
    // Only allow http and https protocols
    if (typeof url === 'string') {
      return url.startsWith('http://') || url.startsWith('https://');
    }
    return false;
  },
  
  // Additional options to handle edge cases
  ignoreErrors: true,
  
  // Customize resource handling
  sources: [
    { selector: 'img', attr: 'src' },
    { selector: 'link[rel="stylesheet"]', attr: 'href' },
    { selector: 'script', attr: 'src' },
    { selector: 'a', attr: 'href' }
  ],
  
  // Skip resources that might cause issues
  onResourceError: (resource, err) => {
    console.log(`Skipping problematic resource: ${resource.url}`);
    return null; // Return null to skip this resource
  }
  
}).then(() => {
  console.log('Scraping complete!');
}).catch(err => {
  console.error('Error:', err);
});