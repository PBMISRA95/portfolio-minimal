---
title: "Do LLMs Hallucinate? Reading Meta's RAG Paper So You Don't Have To"
excerpt: 'A TLDR of the foundational RAG paper by Patrick Lewis et al. Exploring how Retrieval-Augmented Generation solves the hallucination problem in large language models by combining retrieval with generation.'
publishDate: 'Apr 09 2025'
tags:
  - AI
  - Tutorial
---

Do LLMs hallucinate? 

To answer this, I read Meta's RAG paper so you don't have to. Here's my TLDR.

Recently I was reading the foundational paper by Patrick Lewis et al., "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks" (2020) from Meta AI. It is quite interesting how this paper changed the direction of innovation in relation to NLP.

## The Problem

📌 **The problem** - LLMs sound confident even when they're wrong.

So it would be right to say they don't fetch facts, rather they guess.

## The Solution

📌 **The solution (from the paper): RAG** which combines - 

👉 A retriever that searches real documents

👉 A generator (LLM) that uses those documents to generate accurate responses

## Key Learnings

💡 **The 3 most important things I learned:**

1️⃣ RAG beats fine-tuning for tasks like open-domain QA

2️⃣ It uses vector search, not keywords—so it's smarter

3️⃣ You can plug in your own docs, PDFs, or company data

## Why It Matters

📌 **Why it matters:**

Imagine ChatGPT that reads your company's documentation and responds with citations. That's what RAG enables—and that is the reason it proved to be a game-changer.

💬 **Are you working with RAG? Let's connect and share insights** 👇 