import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://okzsliudgyzdpzjpyumx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9renNsaXVkZ3l6ZHB6anB5dW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxOTYxNDAsImV4cCI6MjA2Mzc3MjE0MH0.gb3xrnQjxIVFMFOLZN8i3jpgBSF5pyxnO649WZyTriw';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const siteColors = ['#414141', '#00bfff', "#b10085", "#111111", "#007bff", "#0085b1"];

export async function loadWordCloud() {
  const { data, error } = await supabase.from('say_hi').select('name, message');

  if (error) {
    console.error('Error loading messages:', error.message);
    return;
  }

  const canvas = document.getElementById('wordCloud');
  const centerX = Math.floor(canvas.width / 2);
  const centerY = Math.floor(canvas.height / 2);

  // Prepare word list: Put my name first with larger weight
  const myName = 'Sean McGuire';
  const myNameWeight = 70; // big size for your name

  // Filter out my name from data if it exists to avoid duplicates
  const filteredData = data.filter(entry => entry.name !== myName);

  const wordEntries = [
    [myName, myNameWeight, {origin: [centerX, centerY]}], // pinned center
    ...filteredData.map(row => [row.name, 10 + Math.floor(Math.random() * 30)])
  ];

  const tooltip = document.getElementById('tooltip');

  WordCloud(document.getElementById('wordCloud'), {
    list: wordEntries,
    weightFactor: 1.2,
    origin: [centerX, centerY],     // center origin for overall cloud
    drawOutOfBound: false,          // keep words inside canvas

    color: function() {
        // Randomly pick a color from siteColors for each word
        return siteColors[Math.floor(Math.random() * siteColors.length)];
      },
    hover: (item, dimension, event) => {
        if (!item) {
          // mouse is NOT over a word
          tooltip.style.display = 'none';
          return;
        }
      
        const [word] = item;
        const message = data.find(entry => entry.name === word)?.message || '';
        tooltip.style.display = 'block';
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
        tooltip.innerText = message;
      }
  });
}

loadWordCloud();
