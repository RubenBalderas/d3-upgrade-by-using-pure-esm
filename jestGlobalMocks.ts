import { randomBytes } from 'crypto';

Object.defineProperty(window.self, 'crypto', {
    value: {
        getRandomValues: arr => randomBytes(arr.length)
    }
});

Object.defineProperty(document.body.style, 'transform', {
    value: () => {
        return {
            enumerable: true,
            configurable: true
        };
    }
});

Object.defineProperty(window, 'getComputedStyle', {
    value: () => ({
        getPropertyValue: prop => {
            return '';
        }
    })
});

/**
 * ISSUE: https://github.com/angular/material2/issues/7101
 * Workaround for JSDOM missing transform property
 */

Object.defineProperty(document.body.style, 'transform', {
    value: () => {
        return {
            enumerable: true,
            configurable: true
        };
    }
});

Object.defineProperty(document.body.style, 'backfaceVisibility', {
    value: () => {
        return {
            enumerable: true,
            configurable: true
        };
    }
});
