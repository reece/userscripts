# Reece's ViolentMonkey Scripts

## The Scripts

- Claude Chat Downloader: Enables downloading Claude AI chats. (This is a modified version of https://github.com/PapaCasper/claude-downloader)
- [Shortcut Colorizer](https://greasyfork.org/en/scripts/498387-shortcut-objective-colorizer): Colorizes Epics and Objectives in the roadmap view in [Shortcut](https://shortcut.com/)

## Development

I use Linux (and recently Mac), Chrome, TamperMonkey, and VS Code. Scripts are decomposed into userscript stubs (in `userscripts/`) and scripts that are `@require`'d by the userscripts.  The .iife.js is my convention for reminding that these are immediate invoked function expressions (basically, self-contained code that is exactly what would be in the body of a userscript). The advantage of this layout is that I can use VS Code to edit scripts with immediate effect (after reload).

## Installation

Chrome requires that users enable Developer Mode in order to execute user scripts.  See https://www.tampermonkey.net/faq.php#Q209 for details.

![alt text](.assets/developer-mode.png)

In addition, if you clone this repo, develop locally, and want to use the userscript-stubs and local iife.js files, you'll need to enable access to local file URLs in the TamperMonkey extension configuration:

![alt text](.assets/file-urls.png)

