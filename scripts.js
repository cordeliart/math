Reveal.initialize({
    controls: true,
    progress: true,
    center: true,
    hash: true,// Remove white margin around the content
    margin: 0.15,
    width: 1920,
    height: 1084,
    // disableLayout: true, // Disable default scaling for full control
    plugins: [RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight],
});

window.MathJax = {
    loader: {load: ["output/chtml", '[tex]/color', '[tex]/textmacros', "input/tex"]},
    tex: {packages: {'[+]': ['color'], '[+]': ['textmacros']}}
    // output: {
    // 	scale: 1,                      // global scaling factor for all expressions
    // 	minScale: .5,                  // smallest scaling factor to use
    // 	mtextInheritFont: false,       // true to make mtext elements use surrounding font
    // 	merrorInheritFont: false,      // true to make merror text use surrounding font
    // 	mtextFont: '',                 // font to use for mtext, if not inheriting (empty means use MathJax fonts)
    // 	merrorFont: 'serif',           // font to use for merror, if not inheriting (empty means use MathJax fonts)
    // 	unknownFamily: 'serif',        // font to use for character that aren't in MathJax's fonts
    // 	mathmlSpacing: false,          // true for MathML spacing rules, false for TeX rules
    // 	skipAttributes: {},            // RFDa and other attributes NOT to copy to the output
    // 	exFactor: .5,                  // default size of ex in em units
    // 	displayAlign: 'center',        // default for indentalign when set to 'auto'
    // 	displayIndent: '0',            // default for indentshift when set to 'auto'
    // 	displayOverflow: 'overflow',   // default for overflow (scroll/scale/truncate/elide/linebreak/overflow)
    // 	linebreaks: {                  // options for when overflow is linebreak
    // 	inline: true,                // true for browser-based breaking of inline equations
    // 	width: '100%',               // a fixed size or a percentage of the container width
    // 	lineleading: 0.2,             // the default lineleading in em units
    // 	},
    // 	font: '',                      // the font component to load
    // 	fontPath: FONTPATH,            // The path to the font definitions
    // 	fontExtensions: [],            // The font extensions to load
    // 	htmlHDW: 'auto',               // 'use', 'force', or 'ignore' data-mjx-hdw attributes
    // 	preFilters: [],                // A list of pre-filters to add to the output jax
    // 	postFilters: [],               // A list of post-filters to add to the output jax
    // }
};