// ============================================================
// English detail data for Natural Science and Engineering fields
// Each sub-field contains 4 sections:
//   1. Paper Structure
//   2. Research Methodology
//   3. Key Journals & Citation
//   4. Practical Writing Tips
// ============================================================

export const naturalScienceEn = {

  // -------------------------------------------------------
  // 1. Mathematics
  // -------------------------------------------------------
  math: [
    {
      title: 'Paper Structure',
      content: 'Mathematics papers follow a definition-theorem-proof structure that builds arguments with rigorous logical deduction.',
      details: {
        purpose: 'Core Framework',
        purposeDesc: 'A mathematics paper typically opens with an introduction that motivates the problem and summarizes main results, followed by a sequence of definitions, lemmas, propositions, theorems, and proofs. Sections are organized so that each result depends only on previously established statements. The conclusion often discusses open problems, conjectures, and potential generalizations.',
        elements: 'Essential Components',
        elementList: [
          'Abstract stating the main theorem or result concisely',
          'Introduction with motivation, historical context, and a summary of contributions',
          'Preliminary section defining notation, conventions, and background results',
          'Main body organized as a logical chain of definitions, lemmas, and theorems with complete proofs',
          'Concluding remarks with open questions, conjectures, and future directions'
        ],
        tips: 'Structural Guidelines',
        tipList: [
          'Number all definitions, theorems, lemmas, and corollaries with a consistent scheme (e.g., Theorem 2.3)',
          'State the main result early in the introduction so readers know the destination before the journey',
          'Separate technical lemmas into their own subsections to keep the main narrative readable',
          'Use appendices for lengthy calculations or auxiliary proofs that would interrupt the logical flow'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'Mathematical research relies on axiomatic reasoning, proof techniques, and computational verification.',
      details: {
        purpose: 'Methodological Foundations',
        purposeDesc: 'Research in mathematics involves formulating conjectures based on patterns, constructing rigorous proofs using deductive logic, and verifying results through computational experiments where applicable. Common proof techniques include direct proof, contradiction, contrapositive, induction (ordinary, strong, transfinite), and construction. Applied mathematics additionally employs numerical simulation and asymptotic analysis to validate theoretical predictions.',
        elements: 'Key Proof and Analysis Techniques',
        elementList: [
          'Direct proof, proof by contradiction, and proof by contrapositive',
          'Mathematical induction (weak, strong, structural, and transfinite)',
          'Constructive proofs that explicitly build the desired object',
          'Counterexample construction to disprove conjectures',
          'Computational verification using software such as Mathematica, SageMath, or MATLAB'
        ],
        tips: 'Methodology Best Practices',
        tipList: [
          'Clearly state all assumptions and hypotheses before beginning a proof',
          'Use LaTeX environments (\\begin{proof}...\\end{proof}) for typesetting and use QED symbols to mark proof endings',
          'When a proof is long, provide a proof sketch or roadmap at the beginning',
          'For applied work, compare analytical results with numerical simulations and discuss convergence or error bounds'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'Mathematics publishing centers on prestigious journals with rigorous peer review and specific citation conventions.',
      details: {
        purpose: 'Top-Tier Venues',
        purposeDesc: 'Leading mathematics journals include the Journal of the American Mathematical Society (JAMS), Annals of Mathematics, Inventiones Mathematicae, Acta Mathematica, and Duke Mathematical Journal. Applied mathematics has strong outlets such as SIAM Journal on Applied Mathematics, Communications on Pure and Applied Mathematics, and Journal of Computational Physics. The arXiv preprint server plays a vital role in rapid dissemination.',
        elements: 'Important Journals and Resources',
        elementList: [
          'Journal of the American Mathematical Society (JAMS) -- broad, highest impact in pure math',
          'Annals of Mathematics -- landmark results across all areas of mathematics',
          'Inventiones Mathematicae and Acta Mathematica -- top European journals for pure mathematics',
          'SIAM Review and SIAM Journal on Applied Mathematics -- leading applied mathematics outlets',
          'MathSciNet and zbMATH -- standard databases for verifying references and citation data'
        ],
        tips: 'Citation Conventions',
        tipList: [
          'Use BibTeX with the amsrefs or amsplain style for consistent formatting',
          'Cite the original theorem source rather than secondary references whenever possible',
          'Include arXiv identifiers (e.g., arXiv:2301.12345) for preprints not yet published',
          'Follow the journal\u2019s specific reference style -- some use numbered references, others use author-year'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'Effective mathematical writing balances formal rigor with clarity and readability.',
      details: {
        purpose: 'Writing for Clarity',
        purposeDesc: 'Good mathematical writing guides the reader through complex arguments with clear signposting, precise language, and well-chosen notation. Every symbol should be defined before use, and the prose between formulas should explain the logical connections. Avoid walls of equations without explanatory text. Use examples and special cases to build intuition before presenting general results.',
        elements: 'Writing Essentials',
        elementList: [
          'Define every symbol and piece of notation at first use, ideally in a notation section',
          'Write complete sentences even when they contain displayed equations',
          'Provide intuitive explanations and motivating examples alongside formal statements',
          'Use consistent notation throughout -- avoid reusing the same symbol for different objects',
          'Master LaTeX packages: amsmath, amsthm, amssymb, mathtools, and tikz for diagrams'
        ],
        tips: 'Polishing Your Manuscript',
        tipList: [
          'Read the manuscript aloud to catch awkward phrasing and logical gaps in the prose',
          'Ask a colleague outside your specialty to read the introduction for accessibility',
          'Use Halmos\u2019s principle: rewrite the introduction last, after the proofs are complete',
          'Keep the distinction between pure and applied mathematics audiences in mind -- adjust the level of abstraction accordingly'
        ]
      }
    }
  ],

  // -------------------------------------------------------
  // 2. Physics
  // -------------------------------------------------------
  physics: [
    {
      title: 'Paper Structure',
      content: 'Physics papers follow the IMRAD format, integrating theoretical frameworks with experimental or computational results.',
      details: {
        purpose: 'IMRAD Framework for Physics',
        purposeDesc: 'Physics papers are structured around Introduction, Methods (theoretical and/or experimental), Results, and Discussion. Theoretical papers may replace the Methods section with a detailed derivation. Experimental papers require thorough descriptions of apparatus, measurement procedures, and uncertainty analysis. Letters (e.g., PRL format) condense this into 4 pages with supplemental material.',
        elements: 'Structural Components',
        elementList: [
          'Abstract (typically 100--200 words) summarizing the problem, method, key result, and significance',
          'Introduction establishing the physical context, prior work, and the specific question addressed',
          'Theory/Model section presenting the Hamiltonian, Lagrangian, or governing equations',
          'Experimental Setup or Computational Methods with enough detail for reproducibility',
          'Results and Discussion with figures, data tables, and comparison to theoretical predictions'
        ],
        tips: 'Structure Tips',
        tipList: [
          'For Physical Review Letters, keep the main text under 3,750 words and use Supplemental Material for derivations',
          'Present the most important result (the "money figure") early in the Results section',
          'Clearly separate theoretical predictions from experimental observations in the discussion',
          'Include an explicit statement of units (SI preferred) and uncertainty in every quantitative result'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'Physics research combines theoretical derivation, controlled experimentation, and computational simulation.',
      details: {
        purpose: 'Theory-Experiment Interplay',
        purposeDesc: 'Physics methodology revolves around the cycle of hypothesis, prediction, experiment, and refinement. Theoretical work involves deriving consequences from fundamental equations (Maxwell, Schrodinger, Einstein field equations, etc.). Experimental work requires careful control of variables, calibration, and systematic uncertainty analysis. Computational physics bridges theory and experiment through Monte Carlo simulations, molecular dynamics, density functional theory (DFT), and finite element methods.',
        elements: 'Core Methodological Tools',
        elementList: [
          'Analytical derivation from first principles using dimensional analysis and perturbation theory',
          'Controlled experiments with systematic and statistical error analysis',
          'Monte Carlo simulations and molecular dynamics for many-body systems',
          'Density functional theory (DFT) and ab initio calculations for quantum systems',
          'Data analysis using ROOT, Python (NumPy/SciPy), or MATLAB with proper statistical tests'
        ],
        tips: 'Methodology Recommendations',
        tipList: [
          'Always report uncertainties as standard deviations or confidence intervals with explicit statistical methods',
          'Use SI units consistently and convert all results to SI before comparison',
          'For simulations, document the code version, parameters, and random seeds for reproducibility',
          'Perform sensitivity analyses to show how results change with key assumptions or parameters'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'Physics publishing spans prestigious society journals and high-impact multidisciplinary outlets.',
      details: {
        purpose: 'Premier Publication Venues',
        purposeDesc: 'Physical Review Letters (PRL) is the flagship rapid-communication journal in physics, publishing concise reports of significant findings. Physical Review A--E and Physical Review X cover topical areas. Nature Physics and Science publish breakthrough results with broad impact. For specific subfields, journals like The Astrophysical Journal, Nuclear Physics B, and Journal of High Energy Physics serve specialized communities. The arXiv preprint server is central to physics culture.',
        elements: 'Key Journals by Subfield',
        elementList: [
          'Physical Review Letters (PRL) -- high-impact, short-format letters across all physics',
          'Physical Review X (PRX) -- open-access, high-selectivity journal for significant advances',
          'Nature Physics -- interdisciplinary physics with broad readership',
          'The Astrophysical Journal (ApJ) and Monthly Notices of the RAS -- astrophysics and cosmology',
          'Journal of High Energy Physics (JHEP) and Nuclear Physics B -- particle and theoretical physics'
        ],
        tips: 'Citation Practices',
        tipList: [
          'Use REVTeX 4.2 with BibTeX for APS journals to ensure correct formatting automatically',
          'Cite DOIs whenever available; include arXiv identifiers for preprints',
          'For large collaborations (e.g., ATLAS, CMS), cite the collaboration name rather than individual authors',
          'Follow the journal\u2019s convention for numbering -- APS uses superscript numbers, while some use author-year'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'Physics writing demands precision in terminology, proper use of units, and effective data visualization.',
      details: {
        purpose: 'Communicating Physics Clearly',
        purposeDesc: 'Good physics writing precisely describes physical phenomena, clearly presents quantitative results with uncertainties, and uses figures that convey data efficiently. Every equation should be introduced with context ("From conservation of energy, we obtain...") and followed by interpretation. Figures should have labeled axes with units, legible fonts, and appropriate error bars. Avoid jargon that is specific to one subfield when writing for a broad physics audience.',
        elements: 'Writing Fundamentals',
        elementList: [
          'Use consistent notation: vectors in bold or with arrows, operators with hats, matrices in uppercase bold',
          'Label all figure axes with quantity name, symbol, and SI unit (e.g., "Wavelength lambda (nm)")',
          'Include error bars on all experimental data points and explain the error model in the caption',
          'Write equation derivations with clear intermediate steps so readers can follow the logic',
          'Use active voice for clarity: "We measured the decay rate" rather than "The decay rate was measured"'
        ],
        tips: 'Finishing Touches',
        tipList: [
          'Check dimensional consistency of every equation before submission',
          'Use color-blind-friendly palettes (e.g., Okabe-Ito) in all figures',
          'For PRL submissions, write a compelling one-paragraph summary suitable for non-specialists',
          'Have both a theorist and an experimentalist read the paper to catch perspective-specific issues'
        ]
      }
    }
  ],

  // -------------------------------------------------------
  // 3. Chemistry
  // -------------------------------------------------------
  chemistry: [
    {
      title: 'Paper Structure',
      content: 'Chemistry papers follow a synthesis-characterization-application framework, often with extensive Supporting Information.',
      details: {
        purpose: 'Synthesis-Characterization-Application Framework',
        purposeDesc: 'Chemistry papers typically describe the design and synthesis of compounds or materials, their characterization using spectroscopic and analytical techniques, and their application or performance evaluation. The main text focuses on key results and discussion, while detailed experimental procedures, spectral data, and additional characterization are placed in Supporting Information (SI). This dual-document structure is standard in top chemistry journals.',
        elements: 'Core Sections',
        elementList: [
          'Abstract with a graphical abstract (TOC graphic) summarizing the key finding visually',
          'Introduction establishing the chemical problem, known approaches, and the gap addressed',
          'Results and Discussion integrated section presenting synthesis, characterization, and mechanistic insights',
          'Experimental Section (or in SI) with detailed procedures, reagent sources, and instrument settings',
          'Supporting Information containing NMR spectra, HRMS data, XRD patterns, and additional tables'
        ],
        tips: 'Structural Advice',
        tipList: [
          'Design the TOC graphic to be self-explanatory -- it is often the first thing editors and reviewers see',
          'In JACS Communications, keep the main text to 4 pages with critical data; move all else to SI',
          'Present characterization data in a systematic order: NMR, MS, IR, XRD, elemental analysis',
          'Include a scheme for multi-step syntheses showing reagents, conditions, and yields at each step'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'Chemistry research integrates synthetic design, spectroscopic characterization, and computational modeling.',
      details: {
        purpose: 'Experimental and Computational Approaches',
        purposeDesc: 'Chemical research methodology spans wet-lab synthesis (organic, inorganic, polymer), analytical characterization (NMR, mass spectrometry, X-ray crystallography, electron microscopy), and computational chemistry (DFT, molecular dynamics, docking). Modern chemistry increasingly combines these approaches: a new catalyst might be synthesized, characterized by X-ray diffraction and NMR, evaluated for activity, and understood through DFT calculations of transition states.',
        elements: 'Key Methodological Tools',
        elementList: [
          'Organic and inorganic synthesis techniques including Schlenk line, glovebox, and flow chemistry',
          'Nuclear Magnetic Resonance (NMR) spectroscopy -- 1H, 13C, 2D experiments (COSY, HSQC, NOESY)',
          'Mass spectrometry (ESI-MS, MALDI-TOF, HRMS) for molecular weight confirmation',
          'X-ray crystallography (single-crystal and powder XRD) for structural determination',
          'Computational chemistry: DFT (Gaussian, ORCA), molecular dynamics (GROMACS), and reaction pathway modeling'
        ],
        tips: 'Methodology Best Practices',
        tipList: [
          'Report all characterization data with instrument model, solvent, and measurement conditions',
          'For new compounds, provide full spectroscopic characterization (NMR, HRMS, IR, melting point)',
          'Include crystal structure data in CIF format and deposit with the Cambridge Crystallographic Data Centre (CCDC)',
          'Document computational methods with basis set, functional, solvent model, and convergence criteria'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'Chemistry publishing is centered on society journals and multidisciplinary outlets with high standards for characterization.',
      details: {
        purpose: 'Leading Chemistry Journals',
        purposeDesc: 'The Journal of the American Chemical Society (JACS) and Angewandte Chemie are the most prestigious broad-scope chemistry journals. Nature Chemistry publishes high-impact work across all chemical disciplines. Specialized journals include Organic Letters, Inorganic Chemistry, ACS Nano, and Chemistry of Materials. The Royal Society of Chemistry publishes Chemical Science (open access), Chemical Communications, and Dalton Transactions. ChemRxiv serves as the preprint server.',
        elements: 'Important Journals and Resources',
        elementList: [
          'Journal of the American Chemical Society (JACS) -- broad scope, highest prestige in chemistry',
          'Angewandte Chemie International Edition -- rapid communications of significant chemistry results',
          'Nature Chemistry -- high-impact, interdisciplinary chemistry research',
          'ACS Catalysis, ACS Nano, Chemistry of Materials -- top specialty ACS journals',
          'Chemical Reviews and Chemical Society Reviews -- premier review journals for comprehensive surveys'
        ],
        tips: 'Citation Guidelines',
        tipList: [
          'Use ACS citation style: superscript numbers in text, with full journal title or standard abbreviation in references',
          'Cite the original synthetic procedure for known compounds, not a paper that merely uses them',
          'Include DOIs for all references; ACS journals require them',
          'When citing computational methods, reference both the method paper and the software package used'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'Chemistry writing requires precise nomenclature, clear reaction schemes, and well-organized Supporting Information.',
      details: {
        purpose: 'Effective Chemistry Communication',
        purposeDesc: 'Chemistry manuscripts must balance technical precision with readability. Use IUPAC nomenclature for compound names and provide structure drawings for clarity. Reaction schemes should clearly show reagents, conditions (solvent, temperature, time), and yields. Figures of spectra must include axis labels and key peak assignments. The Supporting Information should be organized with a table of contents and page numbers for easy navigation.',
        elements: 'Writing Essentials',
        elementList: [
          'Use IUPAC systematic names and provide compound numbers (1, 2a, 2b...) for easy reference',
          'Draw structures with ChemDraw using ACS Document 1996 settings for consistent formatting',
          'Present NMR data in the standard format: 1H NMR (400 MHz, CDCl3) delta 7.25 (s, 1H)...',
          'Create clear reaction schemes with ChemDraw showing all reagents above the arrow and conditions below',
          'Organize Supporting Information with a clickable table of contents and consistent section headers'
        ],
        tips: 'Polish and Submission',
        tipList: [
          'Run a plagiarism and structure check before submission; verify all compound numbers are consistent',
          'Ensure every compound in a scheme is mentioned in the text and every spectrum in SI is referenced',
          'Use consistent significant figures aligned with measurement precision',
          'Prepare the TOC graphic at the journal\u2019s specified dimensions (typically 3.25 x 1.75 inches for JACS)'
        ]
      }
    }
  ],

  // -------------------------------------------------------
  // 4. Biology
  // -------------------------------------------------------
  biology: [
    {
      title: 'Paper Structure',
      content: 'Biology papers use the IMRAD format with emphasis on reproducibility, data availability, and ethical compliance.',
      details: {
        purpose: 'IMRAD in Biological Sciences',
        purposeDesc: 'Biology papers follow Introduction, Materials and Methods, Results, and Discussion. Molecular biology papers often include detailed supplementary figures and tables. Ecology papers may feature extended methods describing field sites and sampling designs. Many journals now require Data Availability Statements and Code Availability Statements. An increasing number of journals require structured abstracts with labeled subsections (Background, Methods, Results, Conclusions).',
        elements: 'Standard Sections',
        elementList: [
          'Abstract (structured or unstructured) with key quantitative results and statistical significance',
          'Introduction with biological context, known mechanisms, and the specific hypothesis tested',
          'Materials and Methods with organism details, reagents (catalog numbers), and statistical analysis plan',
          'Results section with figures showing data, statistical tests, and p-values or confidence intervals',
          'Discussion interpreting findings in the context of existing knowledge, acknowledging limitations'
        ],
        tips: 'Structural Recommendations',
        tipList: [
          'For Cell/Nature/Science, follow the specific format: main text with a few high-impact figures and extensive supplementary data',
          'Include a graphical abstract or summary figure when the journal supports it',
          'Place detailed protocols in Supplementary Methods or deposit them on protocols.io',
          'Add a Data Availability Statement specifying the repository (GEO, SRA, Dryad, Zenodo) and accession numbers'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'Biology research spans molecular experiments, fieldwork, bioinformatics pipelines, and integrative approaches.',
      details: {
        purpose: 'Diverse Methodological Landscape',
        purposeDesc: 'Biological research employs wet-lab techniques (PCR, Western blot, CRISPR, flow cytometry), field methods (transect surveys, mark-recapture, remote sensing), imaging (confocal microscopy, cryo-EM), and computational analysis (genomics, transcriptomics, phylogenetics). Modern biology increasingly demands multi-omics integration and bioinformatics proficiency. Reproducibility requires detailed protocol documentation, proper controls, and statistical rigor.',
        elements: 'Key Methodological Areas',
        elementList: [
          'Molecular biology: PCR, qRT-PCR, CRISPR-Cas9 gene editing, Western/Southern/Northern blots',
          'Genomics and transcriptomics: RNA-seq, ChIP-seq, single-cell sequencing, metagenomics pipelines',
          'Imaging: confocal and super-resolution microscopy, cryo-EM, live-cell imaging with quantification',
          'Ecology and field biology: experimental design, sampling strategies, population modeling, GIS mapping',
          'Bioinformatics: sequence alignment (BLAST), phylogenetics (RAxML), statistical analysis in R/Bioconductor'
        ],
        tips: 'Methodology Best Practices',
        tipList: [
          'Include biological replicates (not just technical replicates) and state sample sizes with power analysis justification',
          'For bioinformatics, specify software versions, parameter settings, and reference genome builds',
          'Document antibody validation: catalog number, lot number, dilution, and validation method',
          'Follow ARRIVE guidelines for animal studies and CONSORT for clinical trials'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'Biology publishing spans high-impact general journals and numerous specialized outlets across subfields.',
      details: {
        purpose: 'Premier Biology Journals',
        purposeDesc: 'Cell, Nature, and Science are the most prestigious outlets for major biological discoveries. Subfield-specific top journals include Nature Genetics, Nature Neuroscience, Molecular Cell, The EMBO Journal, and PNAS. Ecology journals include Ecology Letters, The American Naturalist, and Global Ecology and Biogeography. Open-access mega-journals like eLife, PLOS Biology, and PLOS ONE have become important venues. BioRxiv is the standard preprint server.',
        elements: 'Important Journals',
        elementList: [
          'Cell and its sister journals (Cell Reports, Molecular Cell, Cell Systems) -- molecular and cell biology',
          'Nature and Nature-branded journals (Nature Genetics, Nature Methods, Nature Ecology & Evolution)',
          'PNAS -- broad-scope academy journal covering all biological sciences',
          'eLife -- high-quality open-access journal with transparent peer review',
          'Ecology Letters and The American Naturalist -- top outlets for ecology and evolutionary biology'
        ],
        tips: 'Citation Practices',
        tipList: [
          'Use reference management software (Zotero, Mendeley, EndNote) with the journal\u2019s specific citation style',
          'Cite primary research articles rather than reviews when supporting specific factual claims',
          'For sequence data, cite the accession numbers in addition to the paper reference',
          'Include DOIs and PubMed IDs (PMIDs) to facilitate electronic linking'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'Biology writing emphasizes figure quality, statistical transparency, image ethics, and data sharing.',
      details: {
        purpose: 'Clear Biological Communication',
        purposeDesc: 'Biology manuscripts require high-quality figures with proper statistical annotation, adherence to image integrity guidelines, and transparent reporting of methods and data. Journals increasingly enforce policies against inappropriate image manipulation (contrast adjustment, splicing gels, duplicating panels). Statistical reporting must include test names, exact p-values, effect sizes, and sample sizes. Use standard gene nomenclature (italicized gene names, roman protein names).',
        elements: 'Writing Essentials',
        elementList: [
          'Follow standard nomenclature: italicize gene names (TP53), use roman for proteins (p53), capitalize human genes',
          'Create figures at publication resolution (300 dpi for images, 600 dpi for line art) in TIFF or EPS format',
          'Report statistical results completely: test name, test statistic, degrees of freedom, exact p-value, and n',
          'Avoid inappropriate image manipulation: adjustments must be applied uniformly and disclosed in Methods',
          'Use consistent abbreviations and define all of them at first use in the text'
        ],
        tips: 'Submission Checklist',
        tipList: [
          'Run image integrity checks (e.g., using ImageTwin or manual inspection) before submission to avoid retractions',
          'Deposit raw data in appropriate repositories (GEO for microarray/seq data, PDB for structures, GenBank for sequences)',
          'Include ethics statements for human subjects (IRB approval) and animal research (IACUC protocol number)',
          'Write a cover letter highlighting novelty and suggesting (and excluding) reviewers with brief justifications'
        ]
      }
    }
  ],

  // -------------------------------------------------------
  // 5. Earth & Environmental Science
  // -------------------------------------------------------
  'earth-science': [
    {
      title: 'Paper Structure',
      content: 'Earth science papers integrate field observations, spatial analysis, and modeling within an IMRAD-like framework.',
      details: {
        purpose: 'Field-to-Analysis Framework',
        purposeDesc: 'Earth and environmental science papers typically begin with a geological, climatic, or ecological context, describe the study area and field methods, present analytical or remote sensing data, and discuss the results in terms of earth system processes. A study area section with maps is nearly universal. Papers often combine multiple data types: field measurements, satellite imagery, geochemical analyses, and numerical models. The time and spatial scales of the study must be clearly defined.',
        elements: 'Standard Sections',
        elementList: [
          'Abstract summarizing the research question, study area, methods, key findings, and broader implications',
          'Introduction with geological/environmental context, previous work in the study area, and objectives',
          'Study Area section with location maps (including coordinates), geology, climate, and land use context',
          'Methods covering field sampling, laboratory analysis, remote sensing data processing, and modeling',
          'Results and Discussion with maps, cross-sections, time series, and comparison to existing models'
        ],
        tips: 'Structural Guidelines',
        tipList: [
          'Always include a well-designed study area map with scale bar, north arrow, coordinate grid, and legend',
          'Describe the temporal range and resolution of datasets explicitly (e.g., "monthly data from 1980 to 2023")',
          'Separate observational results from model outputs to help readers assess each independently',
          'Use supplementary materials for large datasets, additional maps, or detailed analytical procedures'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'Earth science methodology spans field surveys, remote sensing, GIS analysis, and numerical modeling.',
      details: {
        purpose: 'Multi-Scale Observational and Modeling Approaches',
        purposeDesc: 'Earth science research integrates direct observation (field geology, soil sampling, water quality monitoring), remote sensing (satellite and airborne imagery, LiDAR, radar), geographic information systems (GIS) for spatial analysis, and numerical modeling (climate models, hydrological models, geodynamic simulations). Modern workflows often involve processing large geospatial datasets using Python (GeoPandas, Rasterio), R, or Google Earth Engine. Field data are combined with remote sensing products to calibrate and validate models.',
        elements: 'Key Methodological Tools',
        elementList: [
          'Field surveying: geological mapping, sediment coring, water/soil sampling, GPS/GNSS positioning',
          'Remote sensing: multispectral/hyperspectral satellite imagery (Landsat, Sentinel), SAR, LiDAR, UAV surveys',
          'GIS and spatial analysis: ArcGIS Pro, QGIS, spatial statistics, terrain analysis, watershed delineation',
          'Geochemical and geophysical analysis: XRF, ICP-MS, seismic surveys, magnetotellurics',
          'Numerical modeling: climate models (CESM, WRF), hydrological models (SWAT, MODFLOW), landscape evolution models'
        ],
        tips: 'Methodology Recommendations',
        tipList: [
          'Document all GPS coordinates, datum (e.g., WGS84), and coordinate reference systems used',
          'For remote sensing, report satellite platform, sensor, acquisition dates, and preprocessing steps (atmospheric correction, co-registration)',
          'Archive field data and code in FAIR-compliant repositories (Pangaea, NERC, EarthChem, Zenodo)',
          'Perform sensitivity analysis and uncertainty quantification for all numerical models'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'Earth science journals span geology, atmospheric science, hydrology, and environmental science.',
      details: {
        purpose: 'Top Publication Venues',
        purposeDesc: 'Nature Geoscience is the highest-impact journal for broad earth science discoveries. Geology (GSA) publishes concise, high-impact articles. Leading specialty journals include the Journal of Geophysical Research (JGR) series, Geophysical Research Letters (GRL), Earth and Planetary Science Letters, and Global and Planetary Change. Environmental science outlets include Environmental Science & Technology (ES&T), Water Resources Research, and Global Change Biology. ESSOAr and EarthArXiv serve as preprint platforms.',
        elements: 'Important Journals',
        elementList: [
          'Nature Geoscience -- highest-impact broad earth science journal',
          'Geology (GSA) and Earth and Planetary Science Letters -- top geology and planetary science journals',
          'Journal of Geophysical Research (Solid Earth, Atmospheres, Oceans, etc.) -- comprehensive AGU journal series',
          'Geophysical Research Letters (GRL) -- rapid, high-impact letters across all geosciences',
          'Environmental Science & Technology (ES&T) and Water Resources Research -- leading environmental and hydrology journals'
        ],
        tips: 'Citation Conventions',
        tipList: [
          'Use author-year citation style (common in AGU/GSA journals) and manage references with Zotero or Mendeley',
          'Cite the data source/repository when using publicly available datasets (e.g., USGS, NOAA, Copernicus)',
          'Reference the original method paper for analytical techniques (e.g., the ICP-MS protocol)',
          'Include map data attributions (e.g., OpenStreetMap, USGS topographic data) in figure captions'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'Earth science writing demands effective map design, clear temporal narratives, and interdisciplinary accessibility.',
      details: {
        purpose: 'Communicating Earth Science',
        purposeDesc: 'Earth science papers must communicate spatial and temporal information effectively. Maps are the primary visualization tool and must be designed with proper cartographic conventions. Data spanning geological time scales require clear stratigraphic or chronological frameworks. Since earth science is inherently interdisciplinary, writing should be accessible to readers from adjacent fields (e.g., a geochemist should be able to follow a paper on paleoclimate).',
        elements: 'Writing Essentials',
        elementList: [
          'Design maps with scale bars, north arrows, coordinate grids, clear legends, and appropriate projections',
          'Use standard geological time terminology and cite the International Chronostratigraphic Chart',
          'Present uncertainty in ages, measurements, and model outputs with consistent notation (2-sigma, CI)',
          'Create multi-panel figures that combine maps, cross-sections, and time-series for comprehensive visualization',
          'Use accessible color schemes for maps (consider color-blind readers and grayscale printing)'
        ],
        tips: 'Final Preparation',
        tipList: [
          'Verify that all geographic coordinates in the text match those on the maps',
          'Ensure consistency between stratigraphic names, ages, and correlations throughout the manuscript',
          'Include a clear statement of data availability with repository links and accession identifiers',
          'For interdisciplinary submissions (e.g., Nature Geoscience), minimize jargon and define field-specific terms'
        ]
      }
    }
  ]
};


export const engineeringEn = {

  // -------------------------------------------------------
  // 6. Computer Science
  // -------------------------------------------------------
  computer: [
    {
      title: 'Paper Structure',
      content: 'Computer science papers are often conference-centric, featuring algorithm descriptions, experimental evaluations, and ablation studies.',
      details: {
        purpose: 'Conference-Centric Paper Format',
        purposeDesc: 'Computer science uniquely values peer-reviewed conference publications as primary research venues, often equal to or above journal publications. Papers typically follow a structure of Introduction, Related Work, Method (algorithm/model description), Experiments, and Conclusion. Machine learning papers include ablation studies isolating each contribution. Systems papers emphasize architecture, implementation, and benchmarks. The page limit (often 8--10 pages plus references) demands concise writing.',
        elements: 'Core Components',
        elementList: [
          'Abstract (150--250 words) highlighting the problem, approach, key results, and improvement over baselines',
          'Introduction with motivation, problem statement, contributions list (typically 3--4 bullet points), and paper outline',
          'Related Work positioning the paper against prior methods with a clear taxonomy',
          'Method/Approach section with algorithm pseudocode, architecture diagrams, and mathematical formulation',
          'Experiments section with datasets, baselines, metrics, main results table, and ablation studies'
        ],
        tips: 'Structure Tips',
        tipList: [
          'Lead with a compelling figure (Figure 1) that visually summarizes the key idea or result',
          'List explicit contributions in the introduction as numbered or bulleted items',
          'Include an ablation study table showing the effect of removing each proposed component individually',
          'Add a Broader Impact or Limitations section -- now required by NeurIPS, ICML, and other top venues'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'CS research methodology spans algorithm design, machine learning experiments, systems evaluation, and theoretical analysis.',
      details: {
        purpose: 'Algorithmic and Experimental Approaches',
        purposeDesc: 'Computer science research ranges from purely theoretical (algorithm complexity analysis, formal verification) to heavily experimental (deep learning, systems benchmarking). ML/AI papers require rigorous experimental methodology: standard benchmarks, multiple random seeds, statistical significance tests, and comparison against strong baselines. Systems papers demand end-to-end performance evaluation under realistic workloads. Theoretical papers require formal proofs of correctness and complexity bounds.',
        elements: 'Key Methodological Components',
        elementList: [
          'Algorithm design with pseudocode, complexity analysis (time and space), and correctness proofs',
          'Machine learning experiments: dataset splits, hyperparameter search strategy, cross-validation, statistical tests',
          'Ablation studies systematically evaluating the contribution of each proposed component',
          'Systems evaluation with throughput, latency, scalability benchmarks, and comparison under controlled conditions',
          'Code and data release for reproducibility -- GitHub repositories with README, requirements, and scripts'
        ],
        tips: 'Methodology Best Practices',
        tipList: [
          'Report results averaged over at least 3--5 random seeds with standard deviations or confidence intervals',
          'Use established benchmarks (ImageNet, GLUE, CIFAR, etc.) to enable fair comparison with prior work',
          'Document all hyperparameters, training details, and computational resources (GPU type, training hours)',
          'Release code and pretrained models; reproducibility is a major factor in review decisions at top venues'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'CS publishing is dominated by selective conferences, complemented by transactions journals and preprint culture.',
      details: {
        purpose: 'Top Conferences and Journals',
        purposeDesc: 'Unlike most fields, computer science elevates peer-reviewed conferences to primary publication venues. NeurIPS, ICML, and ICLR lead in machine learning/AI. CVPR, ECCV, and ICCV dominate computer vision. ACL, EMNLP, and NAACL are top NLP venues. Systems conferences include OSDI, SOSP, and SIGCOMM. For journal publication, IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), ACM Computing Surveys, and the Journal of Machine Learning Research (JMLR) are highly respected. arXiv is heavily used.',
        elements: 'Key Venues',
        elementList: [
          'NeurIPS, ICML, ICLR -- top three machine learning and AI conferences',
          'CVPR, ICCV, ECCV -- leading computer vision conferences',
          'ACL, EMNLP, NAACL -- premier natural language processing conferences',
          'IEEE TPAMI and IJCV -- top journals for pattern recognition and computer vision',
          'Journal of Machine Learning Research (JMLR) and ACM Computing Surveys -- respected open-access and survey journals'
        ],
        tips: 'Citation Guidelines',
        tipList: [
          'Cite the conference proceedings version as the primary reference, not the arXiv preprint, if both exist',
          'Include the arXiv identifier only for papers that have not yet been peer-reviewed or accepted',
          'Use author-year style for most CS venues; some IEEE publications use numbered references',
          'Cite the benchmark dataset paper (e.g., the ImageNet paper) in addition to describing the dataset'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'CS writing emphasizes clarity, reproducibility, effective figures, and code availability.',
      details: {
        purpose: 'Writing for the CS Community',
        purposeDesc: 'Computer science papers must convey complex algorithms and systems clearly within strict page limits. Effective CS writing uses a top-down approach: start with the high-level intuition, then provide formal details. Figures should include architecture diagrams, algorithm flowcharts, and results visualizations. Tables comparing methods across metrics are essential. Code availability and reproducibility are increasingly valued by reviewers and readers.',
        elements: 'Writing Essentials',
        elementList: [
          'Use LaTeX with the venue\u2019s official template (neurips_2024.sty, cvpr.cls, acmart.cls, etc.)',
          'Present algorithm pseudocode using the algorithmicx or algorithm2e LaTeX packages',
          'Create architecture diagrams with consistent visual language (TikZ, draw.io, or PowerPoint)',
          'Format results tables with bold for best results and underline for second-best; include standard deviations',
          'Provide a reproducibility section or checklist (required at NeurIPS, recommended elsewhere)'
        ],
        tips: 'Final Polishing',
        tipList: [
          'Have the paper reviewed by someone unfamiliar with your project to check for clarity and completeness',
          'Check for anonymity in double-blind submissions: remove author names, anonymize GitHub links, avoid self-citing phrases like "our prior work [1]"',
          'Include supplementary material with additional experiments, proofs, or visualizations that do not fit in the page limit',
          'Prepare a clear rebuttal strategy: anticipate common reviewer questions and have responses and additional experiments ready'
        ]
      }
    }
  ],

  // -------------------------------------------------------
  // 7. Electrical Engineering
  // -------------------------------------------------------
  electrical: [
    {
      title: 'Paper Structure',
      content: 'Electrical engineering papers follow a design-simulation-measurement flow, emphasizing circuit performance and reproducibility.',
      details: {
        purpose: 'Design-Simulation-Measurement Framework',
        purposeDesc: 'EE papers present circuit or system designs beginning with specifications and design goals, followed by theoretical analysis, simulation results (SPICE, HFSS, ADS), and measurement data from fabricated prototypes. The comparison between simulated and measured performance is critical. Papers on communications, signal processing, or power systems follow similar flows but with domain-specific metrics (BER, SNR, efficiency, THD). IEEE format with two-column layout is standard.',
        elements: 'Core Sections',
        elementList: [
          'Abstract stating the design target, approach, key measured performance metrics, and technology node',
          'Introduction with application context, state-of-the-art comparison table, and contributions',
          'Circuit/System Design section with schematics, design equations, and trade-off analysis',
          'Simulation Results showing pre-fabrication performance using industry-standard CAD tools',
          'Measurement Results with die photos, test setup descriptions, and comparison of measured vs. simulated data'
        ],
        tips: 'Structural Advice',
        tipList: [
          'Include a state-of-the-art comparison table in the introduction or conclusion with key performance metrics',
          'Present circuit schematics at a level of detail that allows readers to understand the design philosophy',
          'Always show both simulated and measured results on the same plot for direct comparison',
          'Include a die photograph or PCB layout image with key blocks labeled for fabricated designs'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'EE research combines analytical design, CAD simulation, and physical prototyping with precise measurement.',
      details: {
        purpose: 'From Theory to Measured Hardware',
        purposeDesc: 'Electrical engineering methodology progresses from specifications through analytical design, computer-aided simulation, layout/fabrication, and characterization. Analog/RF circuits use SPICE-based simulators (Cadence Spectre, Keysight ADS) and electromagnetic solvers (HFSS, CST). Digital designs use RTL coding (Verilog/VHDL), synthesis, and FPGA prototyping. Signal processing research involves MATLAB/Python algorithm development and hardware implementation. Measurement requires calibrated instruments (network analyzers, oscilloscopes, spectrum analyzers).',
        elements: 'Key Methodological Tools',
        elementList: [
          'Circuit simulation: Cadence Virtuoso (Spectre), LTspice, Keysight ADS for analog/RF design',
          'Electromagnetic simulation: Ansys HFSS, CST Studio Suite for antenna and high-frequency design',
          'FPGA prototyping: Xilinx Vivado or Intel Quartus for digital system verification',
          'Signal processing: MATLAB/Simulink for algorithm development, Python (SciPy, NumPy) for prototyping',
          'Measurement: vector network analyzers, spectrum analyzers, oscilloscopes, semiconductor parameter analyzers'
        ],
        tips: 'Methodology Best Practices',
        tipList: [
          'Document simulation settings: process corner (TT, SS, FF), temperature range, supply voltage variation',
          'For IC designs, report the technology node (e.g., 65nm CMOS, 28nm FDSOI) and foundry PDK version',
          'Calibrate all measurement equipment before data collection and report calibration methodology',
          'Perform Monte Carlo simulations to assess yield and robustness against process variations'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'IEEE Transactions dominate EE publishing, with specialized journals for each subfield.',
      details: {
        purpose: 'IEEE and Leading EE Journals',
        purposeDesc: 'IEEE publishes the vast majority of top electrical engineering journals. IEEE Journal of Solid-State Circuits (JSSC) is the premier venue for IC design. IEEE Transactions on Microwave Theory and Techniques covers RF/microwave circuits. IEEE Transactions on Power Electronics leads in power systems. For communications, IEEE Transactions on Communications and IEEE Journal on Selected Areas in Communications are top choices. The IEEE International Solid-State Circuits Conference (ISSCC) is the flagship circuit design conference.',
        elements: 'Key Journals and Conferences',
        elementList: [
          'IEEE Journal of Solid-State Circuits (JSSC) -- the gold standard for integrated circuit design',
          'IEEE Transactions on Microwave Theory and Techniques (TMTT) -- RF, microwave, and millimeter-wave circuits',
          'IEEE Transactions on Power Electronics -- power converters, motor drives, and energy systems',
          'IEEE Transactions on Signal Processing -- algorithms for communication, audio, image, and sensor signals',
          'ISSCC, VLSI Symposia, RFIC -- top conferences for circuit design, complementing journal publications'
        ],
        tips: 'Citation Practices',
        tipList: [
          'Use IEEE citation style: numbered references in square brackets [1], listed in order of appearance',
          'Cite the journal version rather than the conference version when both exist for the same work',
          'Include DOIs for all IEEE references; IEEE Xplore provides consistent DOI linking',
          'In the comparison table, cite all competing designs with their publication year and technology node'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'EE writing requires precise schematics, professional measurement plots, and clear performance comparisons.',
      details: {
        purpose: 'Professional EE Manuscript Preparation',
        purposeDesc: 'Electrical engineering papers demand professional-quality schematics, well-formatted measurement plots, and rigorous comparison with the state of the art. Schematics should use standard symbols (IEEE or IEC) and be drawn with professional tools. Plots of measured data should include appropriate axis labels, units, and markers distinguishing simulated from measured curves. A performance comparison table summarizing key metrics across competing designs is expected in every paper.',
        elements: 'Writing Essentials',
        elementList: [
          'Draw schematics using professional tools (Cadence Virtuoso capture, Altium, or dedicated drawing software)',
          'Use consistent line styles: solid for measured, dashed for simulated, with clear legends',
          'Label all axes with quantity, symbol, and unit (e.g., "Frequency f (GHz)", "Gain |S21| (dB)")',
          'Create a performance comparison table with metrics: power, area, frequency, FoM, technology node',
          'Follow the IEEE two-column template with proper figure/table placement (top or bottom of column)'
        ],
        tips: 'Submission Preparation',
        tipList: [
          'Use the IEEE LaTeX template (IEEEtran.cls) or the official Word template for consistent formatting',
          'Ensure all figures are legible when printed at column width (~3.5 inches) -- test at actual print size',
          'Define all abbreviations (LNA, PLL, ADC, DAC) at first use even if they seem common in the subfield',
          'Include measurement uncertainty and note whether performance is from a single chip or across multiple samples'
        ]
      }
    }
  ],

  // -------------------------------------------------------
  // 8. Mechanical Engineering
  // -------------------------------------------------------
  mechanical: [
    {
      title: 'Paper Structure',
      content: 'Mechanical engineering papers follow a design-analysis-experiment structure with emphasis on physical validation.',
      details: {
        purpose: 'Design-Analysis-Experiment Framework',
        purposeDesc: 'Mechanical engineering papers typically present a design concept or physical problem, develop analytical or computational models (FEM, CFD), and validate with experimental measurements. The paper begins with the engineering motivation, reviews relevant mechanics and prior work, describes the modeling approach, presents simulation and/or experimental results, and concludes with design implications. Many papers combine computational and experimental work to build confidence in the findings.',
        elements: 'Standard Sections',
        elementList: [
          'Abstract summarizing the engineering problem, modeling approach, key results, and practical implications',
          'Introduction with engineering context, relevant physical principles, and the specific contribution',
          'Theoretical Framework establishing governing equations (Navier-Stokes, elasticity, heat transfer)',
          'Computational Methods describing the FEM/CFD setup: mesh, boundary conditions, solver, and convergence study',
          'Experimental Validation with test setup, instrumentation, measured data, and simulation-experiment comparison'
        ],
        tips: 'Structural Guidelines',
        tipList: [
          'Include a mesh convergence study to demonstrate that computational results are mesh-independent',
          'Present both computational and experimental results for the same conditions to allow direct comparison',
          'Use nondimensional parameters (Reynolds number, Nusselt number) to generalize findings beyond specific cases',
          'Include a practical design recommendation or guideline in the conclusion for engineering applicability'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'ME research integrates finite element methods, CFD, experimental mechanics, and design optimization.',
      details: {
        purpose: 'Computational and Experimental Methods',
        purposeDesc: 'Mechanical engineering research relies on computational tools (FEM for structural and thermal analysis, CFD for fluid flow) and experimental methods (strain gauges, accelerometers, PIV, DIC, wind tunnels). Modern ME research often involves multiphysics coupling (fluid-structure interaction, thermo-mechanical analysis), topology optimization, and additive manufacturing process simulation. Experimental validation remains essential even when computational capabilities are advanced.',
        elements: 'Core Methodological Tools',
        elementList: [
          'Finite Element Method (FEM): ANSYS, ABAQUS, COMSOL for structural, thermal, and multiphysics analysis',
          'Computational Fluid Dynamics (CFD): ANSYS Fluent, OpenFOAM, STAR-CCM+ for flow simulation',
          'Experimental mechanics: strain gauges, accelerometers, digital image correlation (DIC), particle image velocimetry (PIV)',
          'Design optimization: topology optimization (SIMP, level-set), multi-objective optimization (NSGA-II)',
          'Additive manufacturing: process simulation, build orientation optimization, post-processing characterization'
        ],
        tips: 'Methodology Recommendations',
        tipList: [
          'Always perform and report mesh/grid convergence studies with at least three refinement levels',
          'Specify material properties with sources, especially for nonlinear or temperature-dependent models',
          'Report boundary condition choices and their justification, as they strongly influence simulation results',
          'For experimental work, document calibration procedures, measurement uncertainties, and repeatability data'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'ASME journals and leading international outlets dominate mechanical engineering publication.',
      details: {
        purpose: 'Top ME Publication Venues',
        purposeDesc: 'The American Society of Mechanical Engineers (ASME) publishes key journals including the Journal of Mechanical Design, Journal of Applied Mechanics, and Journal of Heat Transfer. International Journal of Mechanical Sciences, International Journal of Heat and Mass Transfer, and Journal of Fluid Mechanics are leading international venues. For specific topics, Composites Part A/B, Additive Manufacturing, and Mechanism and Machine Theory are highly regarded. ASME conferences (IMECE, Turbo Expo) are also important venues.',
        elements: 'Key Journals',
        elementList: [
          'ASME Journal of Mechanical Design and Journal of Applied Mechanics -- core ME design and mechanics journals',
          'International Journal of Heat and Mass Transfer -- leading thermal sciences journal',
          'Journal of Fluid Mechanics -- top-tier fluid dynamics journal (Cambridge University Press)',
          'Composites Part A and Part B -- leading journals for composite materials research',
          'Additive Manufacturing (Elsevier) -- premier journal for 3D printing and AM process research'
        ],
        tips: 'Citation Conventions',
        tipList: [
          'ASME journals use numbered references in square brackets; follow the ASME citation style guide',
          'Cite the original source for constitutive models and material property data',
          'Reference commercial software versions (e.g., "ANSYS Mechanical 2023 R2") in the methods section',
          'For international journals (e.g., IJHMT), check whether author-year or numbered style is required'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'ME writing requires clear technical drawings, proper FEM/CFD visualization, and engineering-oriented conclusions.',
      details: {
        purpose: 'Effective ME Manuscript Writing',
        purposeDesc: 'Mechanical engineering papers must clearly communicate physical systems, computational setups, and experimental configurations. Technical drawings with dimensions and tolerances, contour plots from FEM/CFD with proper color scales, and photographs of experimental setups are essential visual elements. Results should be presented in terms of engineering-relevant quantities (stress, displacement, drag coefficient, Nusselt number) and compared against analytical solutions, experimental data, or published benchmarks.',
        elements: 'Writing Essentials',
        elementList: [
          'Include dimensioned CAD drawings or schematics of the physical system under study',
          'Present FEM/CFD results as contour plots with labeled color bars, including units and consistent scales',
          'Show experimental setup photographs with key components labeled and measurement locations indicated',
          'Use nondimensional parameters for generalizability and include dimensional results for practical applicability',
          'Create comparison plots overlaying simulation, experiment, and analytical solution on a single axis'
        ],
        tips: 'Finishing Touches',
        tipList: [
          'Ensure all contour plots use consistent color scales across comparison figures',
          'Report computational cost (CPU hours, memory) to help readers assess the practicality of the method',
          'Include design guidelines or engineering rules of thumb derived from the study in the conclusion',
          'Follow the journal\u2019s figure sizing guidelines -- ASME typically requires 3.3-inch (single column) or 6.85-inch (double column) widths'
        ]
      }
    }
  ],

  // -------------------------------------------------------
  // 9. Architecture & Civil Engineering
  // -------------------------------------------------------
  civil: [
    {
      title: 'Paper Structure',
      content: 'Civil engineering papers present structural analysis, design methodology, and construction case studies with code compliance.',
      details: {
        purpose: 'Analysis-Design-Validation Framework',
        purposeDesc: 'Civil engineering papers address structural analysis, geotechnical investigations, construction management, transportation systems, or water resources engineering. Papers typically present the engineering problem, develop analytical or numerical models (often validated with experimental or field data), and discuss design implications. Building Information Modeling (BIM) and performance-based design are increasingly central topics. Code compliance (ACI, Eurocode, AASHTO) and safety factors are essential considerations.',
        elements: 'Core Sections',
        elementList: [
          'Abstract summarizing the structural system, analysis method, key findings, and engineering implications',
          'Introduction with project context, design codes referenced, and specific engineering challenges addressed',
          'Structural/Geotechnical Modeling section with element types, material models, boundary conditions, and loading',
          'Analysis Results presenting load-displacement curves, stress distributions, failure modes, and safety factors',
          'Case Study or Experimental Validation with field measurements, load tests, or construction monitoring data'
        ],
        tips: 'Structural Guidelines',
        tipList: [
          'Reference specific design code clauses (e.g., ACI 318-19 Section 22.5, Eurocode 2 Clause 6.2) when discussing code compliance',
          'Include structural drawings with member dimensions, reinforcement details, and connection configurations',
          'Present load-displacement or moment-curvature relationships to characterize structural behavior',
          'Document construction sequence and any deviations from design in case-study papers'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'Civil engineering research combines structural testing, numerical modeling, BIM, and field monitoring.',
      details: {
        purpose: 'Experimental and Computational Civil Engineering',
        purposeDesc: 'Civil engineering research employs large-scale structural testing (shake tables, load frames), finite element modeling for structural and geotechnical systems, field monitoring with sensors (strain gauges, accelerometers, GPS), and Building Information Modeling (BIM) for design coordination and lifecycle management. Research in construction engineering uses scheduling simulation, lean construction principles, and safety analytics. Transportation research employs traffic simulation, pavement modeling, and infrastructure sensing.',
        elements: 'Key Methodological Tools',
        elementList: [
          'Structural FEM: SAP2000, ETABS, ABAQUS, OpenSees for linear and nonlinear structural analysis',
          'Geotechnical modeling: PLAXIS, FLAC for soil-structure interaction and slope stability analysis',
          'BIM platforms: Autodesk Revit, Tekla Structures for design coordination and clash detection',
          'Structural testing: quasi-static cyclic testing, shake table testing, push-over tests, material testing (MTS, Instron)',
          'Field monitoring: structural health monitoring (SHM) with strain gauges, accelerometers, fiber optic sensors, and IoT platforms'
        ],
        tips: 'Methodology Best Practices',
        tipList: [
          'Validate numerical models against experimental data before using them for parametric studies',
          'Report material properties from actual tests (concrete cylinder tests, steel coupon tests), not just nominal values',
          'For seismic analysis, specify ground motion selection criteria, scaling method, and number of records used',
          'Document construction monitoring data with timestamps, weather conditions, and quality control observations'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'ASCE journals are the primary outlets for civil engineering research, complemented by international journals.',
      details: {
        purpose: 'Leading Civil Engineering Journals',
        purposeDesc: 'The American Society of Civil Engineers (ASCE) publishes core journals including the Journal of Structural Engineering, Journal of Geotechnical and Geoenvironmental Engineering, and Journal of Construction Engineering and Management. Engineering Structures (Elsevier) and Structural Safety are important international venues. For earthquake engineering, Earthquake Engineering & Structural Dynamics (Wiley) and Earthquake Spectra (EERI) are top choices. Automation in Construction covers BIM and construction technology.',
        elements: 'Key Journals',
        elementList: [
          'ASCE Journal of Structural Engineering -- premier venue for structural analysis and design research',
          'ASCE Journal of Geotechnical and Geoenvironmental Engineering -- top geotechnical engineering journal',
          'Engineering Structures (Elsevier) -- broad structural engineering journal with international reach',
          'Earthquake Engineering & Structural Dynamics -- leading journal for seismic engineering research',
          'Automation in Construction -- top journal for BIM, robotics, and digital construction technology'
        ],
        tips: 'Citation Guidelines',
        tipList: [
          'Use ASCE author-year citation style (Author, Year) as specified in the ASCE Author Guide',
          'Cite relevant design codes with full designation, year, and section numbers',
          'Reference experimental databases (PEER NGA, NEES) when using ground motion records or structural test data',
          'Include the DOI and standardized journal abbreviation for all references'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'Civil engineering writing requires structural drawings, construction documentation, and code-compliant discussion.',
      details: {
        purpose: 'Professional Civil Engineering Documentation',
        purposeDesc: 'Civil engineering manuscripts must present complex structural systems, construction processes, and design decisions clearly. Structural drawings with proper engineering conventions, construction photographs with annotations, and clearly labeled FEM meshes are essential. Results must be discussed in the context of applicable design codes and safety requirements. Case study papers should provide enough detail to be useful for practitioners while contributing new knowledge for researchers.',
        elements: 'Writing Essentials',
        elementList: [
          'Include structural plan and elevation drawings with dimensions, member sizes, and reinforcement details',
          'Present FEM results with deformed shapes, stress contours, and clearly identified failure modes',
          'Document construction photographs showing key stages, connection details, and instrumentation',
          'Discuss results in terms of code-defined capacity, demand-to-capacity ratios, and safety factors',
          'Use BIM screenshots or 3D renderings to illustrate complex geometric configurations'
        ],
        tips: 'Manuscript Preparation',
        tipList: [
          'Define all structural engineering notation at first use (e.g., f\'c for concrete compressive strength)',
          'Use consistent units throughout; ASCE journals typically use both SI and US customary units',
          'Include a nomenclature list for papers with extensive notation',
          'For case-study papers, balance practical detail with generalizable research contributions'
        ]
      }
    }
  ],

  // -------------------------------------------------------
  // 10. Industrial Engineering
  // -------------------------------------------------------
  industrial: [
    {
      title: 'Paper Structure',
      content: 'Industrial engineering papers present optimization models, simulation studies, and systems-level analysis with practical validation.',
      details: {
        purpose: 'Model-Solution-Validation Framework',
        purposeDesc: 'Industrial engineering papers typically formulate an optimization or decision model, develop a solution methodology (exact algorithms, heuristics, metaheuristics, or simulation), validate with computational experiments or real-world case studies, and discuss managerial implications. Operations research papers require rigorous mathematical formulation. Human factors/ergonomics papers follow a more experiment-based structure with participant studies. Quality engineering papers use statistical methods (DOE, SPC, reliability analysis).',
        elements: 'Core Sections',
        elementList: [
          'Abstract summarizing the problem, modeling approach, solution method, key results, and practical implications',
          'Introduction with industry context, problem significance, and a clear statement of the research gap',
          'Problem Formulation with mathematical model (objective function, constraints, decision variables, parameters)',
          'Solution Methodology describing the algorithm, heuristic, or simulation approach with complexity analysis',
          'Computational Experiments with benchmark instances, comparison against existing methods, and sensitivity analysis'
        ],
        tips: 'Structural Guidelines',
        tipList: [
          'Present the mathematical formulation with numbered equations and a notation table defining all symbols',
          'Include a small illustrative example to explain the model before presenting the full solution method',
          'Report both solution quality (optimality gap) and computational time in experiments',
          'Add a "Managerial Insights" subsection translating technical results into actionable business recommendations'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'IE research uses optimization, simulation, statistical analysis, and human factors methods to improve systems.',
      details: {
        purpose: 'Operations Research and Systems Engineering Methods',
        purposeDesc: 'Industrial engineering research methodology encompasses mathematical optimization (linear, integer, nonlinear, stochastic programming), discrete-event simulation, statistical methods (design of experiments, regression, reliability analysis), and human factors/ergonomics studies (cognitive workload, usability testing, anthropometry). Modern IE increasingly incorporates machine learning for prediction, reinforcement learning for dynamic optimization, and digital twin technology for real-time system modeling.',
        elements: 'Key Methodological Tools',
        elementList: [
          'Mathematical optimization: linear/integer programming (Gurobi, CPLEX), nonlinear programming, stochastic programming',
          'Metaheuristics: genetic algorithms, simulated annealing, particle swarm optimization, tabu search',
          'Discrete-event simulation: Arena, AnyLogic, SimPy for manufacturing, logistics, and healthcare systems',
          'Statistical methods: design of experiments (DOE), response surface methodology, Six Sigma (DMAIC)',
          'Human factors: eye-tracking, motion capture, workload assessment (NASA-TLX), usability studies'
        ],
        tips: 'Methodology Best Practices',
        tipList: [
          'Prove the computational complexity of new optimization problems (NP-hardness) to justify heuristic approaches',
          'For simulation studies, specify warm-up periods, run lengths, number of replications, and confidence intervals',
          'Use established benchmark instances (TSPLIB, Solomon, OR-Library) for fair algorithm comparison',
          'For human factors studies, report participant demographics, sample size justification, and IRB approval'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'IE publishing spans operations research, manufacturing, quality, and human factors journals.',
      details: {
        purpose: 'Top IE and OR Journals',
        purposeDesc: 'IISE Transactions (formerly IIE Transactions) is the flagship journal of the Institute of Industrial and Systems Engineers. Operations Research and Management Science are the top journals of the INFORMS society. Manufacturing Engineering has strong outlets in the Journal of Manufacturing Systems and International Journal of Production Research. Human Factors journal and Ergonomics cover the ergonomics subfield. European Journal of Operational Research (EJOR) is a leading international OR venue.',
        elements: 'Key Journals',
        elementList: [
          'IISE Transactions -- flagship journal covering all areas of industrial and systems engineering',
          'Operations Research (INFORMS) -- premier journal for operations research methodology',
          'Management Science (INFORMS) -- top journal bridging OR, management, and decision science',
          'European Journal of Operational Research (EJOR) -- leading international OR journal with broad scope',
          'International Journal of Production Research -- top manufacturing and production systems journal'
        ],
        tips: 'Citation Practices',
        tipList: [
          'Use author-year citation style for INFORMS journals; check specific style for other publishers',
          'Cite seminal OR models and algorithms (e.g., Dantzig for simplex, Kirkpatrick for simulated annealing)',
          'Reference benchmark instance libraries with version/date to ensure reproducibility',
          'Include computational environment details (solver version, time limits, hardware) as they affect comparison fairness'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'IE writing requires clear mathematical formulations, well-designed computational experiments, and practical relevance.',
      details: {
        purpose: 'Communicating IE Research Effectively',
        purposeDesc: 'Industrial engineering papers must bridge mathematical rigor with practical applicability. Mathematical models should be presented with clear notation, properly numbered equations, and intuitive explanations. Computational experiments need structured reporting with performance metrics, statistical analysis, and meaningful baselines. The gap between model assumptions and real-world conditions should be discussed honestly. Including a case study from industry significantly strengthens the practical contribution.',
        elements: 'Writing Essentials',
        elementList: [
          'Create a notation table listing all sets, parameters, and decision variables with descriptions and units',
          'Present optimization formulations with the standard format: "minimize/maximize ... subject to ..."',
          'Report computational results in structured tables with instance name, size, method, objective value, gap, and CPU time',
          'Visualize solutions using Gantt charts (scheduling), network diagrams (routing), or facility layouts (location problems)',
          'Include sensitivity analysis showing how solutions change with key parameter variations'
        ],
        tips: 'Final Preparation',
        tipList: [
          'Verify that the mathematical formulation is correct: count constraints vs. degrees of freedom, check units',
          'Ensure computational experiments are reproducible: specify solver parameters, time limits, random seeds, and hardware',
          'Translate the research contribution into a "So what?" statement for practitioners in the conclusion',
          'For interdisciplinary work (e.g., healthcare, supply chain), explain the domain context sufficiently for OR reviewers who may lack domain expertise'
        ]
      }
    }
  ]
};
