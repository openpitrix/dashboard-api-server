module.exports = (function() {
  let stas = {
    apps: {
      image: 'http://via.placeholder.com/30x24',
      name: 'Apps',
      total: parseInt(Math.random() * 100),
      centerName: 'Repos',
      progressTotal: 5,
      progress: [],
      lastedTotal: parseInt(Math.random() * 100),
      histograms: []
    },
    clusters: {
      image: 'http://via.placeholder.com/24x24',
      name: 'Clusters',
      total: parseInt(Math.random() * 100),
      centerName: 'Runtimes',
      progressTotal: 4,
      progress: [],
      lastedTotal: parseInt(Math.random() * 100),
      histograms: []
    },
    runtimes: {
      image: 'http://via.placeholder.com/30x24',
      name: 'Runtimes',
      total: parseInt(Math.random() * 100),
      centerName: 'Provider',
      progressTotal: 5,
      progress: [],
      lastedTotal: parseInt(Math.random() * 100),
      histograms: []
    }
  };
  const modules = ['apps', 'clusters', 'runtimes'];
  for (let i = 0; i < modules.length; i++) {
    let sum = 100,
      temp;
    for (let k = 0; k < stas[modules[i]].progressTotal - 1; k++) {
      if (k != stas[modules[i]].progressTotal - 2) {
        temp = parseInt(Math.random() * sum);
        stas[modules[i]].progress.push(temp);
        sum -= temp;
      } else {
        stas[modules[i]].progress.push(sum);
      }
    }
    for (let j = 0; j < 14; j++) {
      stas[modules[i]].histograms.push(parseInt(Math.random() * 100));
    }
  }
  return stas;
})();
