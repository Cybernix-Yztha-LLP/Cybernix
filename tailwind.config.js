/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
  		},
  		keyframes: {
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			}
  		}
  	}
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".mask1": {
          "-webkit-mask-image": `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY3MCIgaGVpZ2h0PSI5MjkiIHZpZXdCb3g9IjAgMCAxNjcwIDkyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IlZlY3RvciAyMDMiIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RfMV8xMikiPgo8cGF0aCBkPSJNMzAyIDE3NEg4MUMzOC40NzQxIDE3NCA0IDIwOC40NzQgNCAyNTFWODQ3QzQgODg5LjUyNiAzOC40NzQxIDkyNCA4MSA5MjRIMTA1MS43NUMxMDc4LjEyIDkyNCAxMDk5LjUgOTAyLjYyMiAxMDk5LjUgODc2LjI1QzEwOTkuNSA4NDkuODc4IDExMjAuODggODI4LjUgMTE0Ny4yNSA4MjguNUgxNTg5QzE2MzEuNTMgODI4LjUgMTY2NiA3OTQuMDI2IDE2NjYgNzUxLjVWODBDMTY2NiAzNy40NzQxIDE2MzEuNTMgMyAxNTg5IDNIMTA5OS41SDQ1NkM0MTMuNDc0IDMgMzc5IDM3LjQ3NDEgMzc5IDgwVjk3QzM3OSAxMzkuNTI2IDM0NC41MjYgMTc0IDMwMiAxNzRaIiBmaWxsPSIjRDlEOUQ5Ii8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZF8xXzEyIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTY3MCIgaGVpZ2h0PSI5MjkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iMSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjE2IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMV8xMiIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18xXzEyIiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=")`,
          "mask-image": `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY3MCIgaGVpZ2h0PSI5MjkiIHZpZXdCb3g9IjAgMCAxNjcwIDkyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IlZlY3RvciAyMDMiIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RfMV8xMikiPgo8cGF0aCBkPSJNMzAyIDE3NEg4MUMzOC40NzQxIDE3NCA0IDIwOC40NzQgNCAyNTFWODQ3QzQgODg5LjUyNiAzOC40NzQxIDkyNCA4MSA5MjRIMTA1MS43NUMxMDc4LjEyIDkyNCAxMDk5LjUgOTAyLjYyMiAxMDk5LjUgODc2LjI1QzEwOTkuNSA4NDkuODc4IDExMjAuODggODI4LjUgMTE0Ny4yNSA4MjguNUgxNTg5QzE2MzEuNTMgODI4LjUgMTY2NiA3OTQuMDI2IDE2NjYgNzUxLjVWODBDMTY2NiAzNy40NzQxIDE2MzEuNTMgMyAxNTg5IDNIMTA5OS41SDQ1NkM0MTMuNDc0IDMgMzc5IDM3LjQ3NDEgMzc5IDgwVjk3QzM3OSAxMzkuNTI2IDM0NC41MjYgMTc0IDMwMiAxNzRaIiBmaWxsPSIjRDlEOUQ5Ii8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZF8xXzEyIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTY3MCIgaGVpZ2h0PSI5MjkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iMSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjE2IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMV8xMiIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18xXzEyIiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=")`,
          "mask-size": "83.995%",
          "mask-repeat": "no-repeat",
          "mask-position": "center",
        },
      });
    }),
      require("tailwindcss-animate")
],
};