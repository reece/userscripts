# Reece's ViolentMonkey Scripts

## The Scripts

- Claude Chat Downloader: Enables downloading Claude AI chats. (This is a modified version of https://github.com/PapaCasper/claude-downloader)
- [Shortcut Colorizer](https://greasyfork.org/en/scripts/498387-shortcut-objective-colorizer): Colorizes Epics and Objectives in the roadmap view in [Shortcut](https://shortcut.com/)

## Development

I use Linux (and recently Mac), Chrome, TamperMonkey, and VS Code. Scripts are decomposed into userscript stubs (in `userscripts/`) and scripts that are `@require`'d by the userscripts.  The .iife.js is my convention for reminding that these are immediate invoked function expressions (basically, self-contained code that is exactly what would be in the body of a userscript). The advantage of this layout is that I can use VS Code to edit scripts with immediate effect (after reload).
