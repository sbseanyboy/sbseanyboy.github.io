import { loadWordCloud } from './word-cloud.js';  // relative path to word-cloud.js

const SUPABASE_URL = "https://okzsliudgyzdpzjpyumx.supabase.co";
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9renNsaXVkZ3l6ZHB6anB5dW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxOTYxNDAsImV4cCI6MjA2Mzc3MjE0MH0.gb3xrnQjxIVFMFOLZN8i3jpgBSF5pyxnO649WZyTriw';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('submission-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = e.target.name.value.trim();
    const message = e.target.message.value.trim();

    const wordCount = messageInput.split(/\s+/).length;
    if (wordCount > 200) {
      alert('Message must be 200 words or fewer.');
      return;
    }
  
    if (!name || !message) return;
  
    const { data, error } = await supabase.from('say_hi').insert([
      { name, message }
    ]);
  
    if (error) {
      alert('Error submitting: ' + error.message);
    } else {
      loadWordCloud()
      e.target.reset();
    }
  });
  
