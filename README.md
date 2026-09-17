# Local Meeting AI

**Live transcription, cleanup, and meeting notes that run entirely in your browser.**

After the first model download, audio and inference stay on your device. There is no meeting-AI backend. This page is static HTML + WebGPU models via [Transformers.js](https://huggingface.co/docs/transformers.js).

## Live demo

**[Open the live page](https://tbenitz.github.io/local-meeting-ai/)**

Use a current Chrome or Edge build with WebGPU. First load downloads the models from Hugging Face; the browser caches them after that.

## What stays local

| Job | Model | Where it runs |
| --- | --- | --- |
| Live speech-to-text | Moonshine Base (`onnx-community/moonshine-base-ONNX`) | Your browser (WebGPU) |
| Transcript polish | S1-mini (`onnx-community/s1-mini-ONNX`) | Your browser (WebGPU) |
| Notes / summary | LFM2.5 350M q4 (`onnx-community/LFM2.5-350M-ONNX`) | Your browser (WebGPU) |
| MP3 encode | lamejs | Your browser |
| PDF export | jsPDF | Your browser |

Internet is only needed to:

1. Load this page and the small JS libraries (Transformers.js, lamejs, jsPDF)
2. Download the ONNX model files **once** from Hugging Face

Microphone audio is processed in-page. Original transcript, polished copy, handwritten notes, and AI notes are kept as separate tabs and can be saved as PDF / Markdown / text on your machine.

## Run it yourself

Open `index.html` from GitHub Pages, or download the file and serve it over `http://localhost` (or open as `file://` in Chrome — the app includes a ScriptProcessor capture path for that).

```bash
git clone https://github.com/tbenitz/local-meeting-ai.git
cd local-meeting-ai
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Requirements

- Chrome / Edge with WebGPU
- Enough GPU memory for the selected models (there is a low-memory option that unloads speech models before loading LFM2.5)
- Microphone permission for live recording

## Privacy in one sentence

**Models run local in the browser. Your meeting audio is not uploaded to a transcription server.**
