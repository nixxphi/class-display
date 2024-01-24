class Tendency {
  constructor(data) {
    this.data = data;
  }
  get mean() { return this.data.reduce((a, b) => a + b) / this.data.length; }

  get median() { this.data.sort((a, b) => a - b); return this.data[Math.floor(this.data.length / 2)]; }

  get mode() {
    const counts = {}; for (const val of this.data) counts[val] = (counts[val] || 0) + 1;
    return Object.keys(counts).reduce((a, b) => counts[b] > counts[a] ? b : a);
  }
}
class Dispersion {
  constructor(data) { this.data = data; }

  get range() { return Math.max(...this.data) - Math.min(...this.data); 
}
  get iqr() { this.data.sort((a, b) => a - b); return this.data[Math.floor(this.data.length * 3 / 4)] - this.data[Math.floor(this.data.length / 4)]; 
}
  
get mad() { const mean = this.data.reduce((a, b) => a + b) / this.data.length; 
return this.data.reduce((sum, val) => sum + Math.abs(val - mean), 0) / this.data.length;}

  get variance() { const mean = this.data.reduce((a, b) => a + b) / this.data.length; return this.data.reduce((sum, val) => sum + (val - mean) * (val - mean), 0) / this.data.length; }

  get std() { return Math.sqrt(this.variance); }
}

;
const ss2 = new Dispersion(
 data = [1, 5, 75, 633, 655, 28, 28, 29, 28, 89, 25, 19,77]
);

console.log(ss2.mean);