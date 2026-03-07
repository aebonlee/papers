// ============================================================
// English detail data for Medical/Health and Arts/Sports fields
// ============================================================

// ---------------------
// MEDICAL / HEALTH
// ---------------------

export const medicalEn = {

  // ======== 1. Medicine ========
  medicine: [
    {
      title: 'Paper Structure',
      content: 'Medical research papers follow the structured IMRaD format with additional clinical-specific sections such as trial registration details and ethical disclosures.',
      details: {
        purpose: 'Why Structure Matters in Medicine',
        purposeDesc: 'A clearly structured manuscript enables clinicians and reviewers to rapidly assess study validity, reproducibility, and clinical significance. Journals such as NEJM, The Lancet, and JAMA enforce strict formatting guidelines rooted in the IMRaD framework, supplemented by structured abstracts, conflict-of-interest statements, and data-sharing declarations.',
        elements: 'Core Structural Elements',
        elementList: [
          'Structured abstract with background, methods, results, and conclusions (typically 250-300 words)',
          'Introduction stating the clinical question and hypothesis with reference to existing gaps in evidence',
          'Methods section detailing study design (RCT, cohort, case-control), participant eligibility, randomization, blinding, and statistical analysis plan',
          'Results presented with flow diagrams (e.g., CONSORT flowchart), primary and secondary endpoints, confidence intervals, and p-values',
          'Discussion addressing clinical implications, comparison with prior trials, limitations, and generalizability'
        ],
        tips: 'Structural Best Practices',
        tipList: [
          'Register your clinical trial on ClinicalTrials.gov or an ICMJE-approved registry before enrollment begins and include the registration number in the abstract',
          'Use the CONSORT checklist for RCTs or STROBE for observational studies to ensure all required elements are reported',
          'Place the IRB/ethics committee approval statement and informed consent details at the beginning of the Methods section',
          'Include a data availability statement specifying whether de-identified patient data can be shared and under what conditions'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'Clinical medicine relies on a hierarchy of evidence, with randomized controlled trials (RCTs) and systematic reviews providing the strongest evidence for treatment efficacy.',
      details: {
        purpose: 'Methodological Rigor in Clinical Research',
        purposeDesc: 'The validity of a clinical study depends on its design, execution, and analysis. RCTs remain the gold standard for evaluating interventions, but observational designs (cohort, case-control, cross-sectional) are essential when randomization is impractical or unethical. Mixed-methods approaches are increasingly used to combine clinical outcomes with patient-reported experiences.',
        elements: 'Key Methodological Components',
        elementList: [
          'Sample size calculation based on expected effect size, alpha level, and statistical power (typically 80-90%)',
          'Randomization procedures (simple, block, stratified) with allocation concealment and blinding protocols (single, double, triple)',
          'Validated outcome measures including primary endpoints (e.g., mortality, disease-free survival) and secondary/exploratory endpoints',
          'Intention-to-treat (ITT) analysis as the primary approach, with per-protocol analysis as sensitivity analysis',
          'Handling of missing data using multiple imputation or mixed-effects models rather than last-observation-carried-forward'
        ],
        tips: 'Methodology Tips',
        tipList: [
          'Pre-register your statistical analysis plan to prevent outcome switching and selective reporting; many journals now require this',
          'Clearly distinguish between superiority, non-inferiority, and equivalence trial designs, as each requires different sample size calculations and interpretation',
          'Report effect sizes with 95% confidence intervals rather than relying solely on p-values to convey clinical significance',
          'Address potential biases explicitly, including selection bias, attrition bias, detection bias, and reporting bias'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'Medical publishing is dominated by high-impact general journals and specialty-specific outlets, each with strict citation standards and peer-review processes.',
      details: {
        purpose: 'Navigating the Medical Publication Landscape',
        purposeDesc: 'Choosing the right journal maximizes a study\'s visibility and impact. The "Big Five" general medical journals (NEJM, The Lancet, JAMA, BMJ, and Annals of Internal Medicine) are highly competitive but offer unparalleled readership. Specialty journals such as Circulation, Journal of Clinical Oncology, and Diabetes Care serve focused audiences with expert reviewers.',
        elements: 'Important Journals and Citation Resources',
        elementList: [
          'New England Journal of Medicine (NEJM) - impact factor consistently above 90, publishes landmark RCTs and clinical reviews',
          'The Lancet family - flagship and specialty journals (Lancet Oncology, Lancet Infectious Diseases) with global health emphasis',
          'JAMA and JAMA Network Open - structured review process, strong emphasis on methodology and statistical reporting',
          'PubMed/MEDLINE as the primary citation database; use MeSH terms for precise literature searches',
          'Reference managers (EndNote, Zotero, Mendeley) configured for Vancouver/NLM citation style used by most medical journals'
        ],
        tips: 'Citation and Journal Selection Tips',
        tipList: [
          'Most medical journals use Vancouver (numbered) citation style; verify the specific journal\'s requirements before formatting references',
          'Cite clinical guidelines (e.g., ACC/AHA, NICE, WHO) with their full title, issuing organization, and year of publication or most recent update',
          'When citing systematic reviews, prefer Cochrane Reviews and check the PROSPERO registry for ongoing reviews on your topic',
          'Include DOIs for all references and verify that each cited clinical trial has its registration number noted in the reference list when available'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'Effective medical writing demands precision, transparency, and adherence to ethical and regulatory standards throughout the manuscript.',
      details: {
        purpose: 'Writing for Clinical Impact',
        purposeDesc: 'Medical manuscripts must communicate complex clinical findings clearly to a multidisciplinary audience including clinicians, researchers, policymakers, and patient advocates. Transparent reporting builds trust and enables evidence-based practice. Regulatory agencies and ethics committees increasingly scrutinize published reports, making accuracy and completeness non-negotiable.',
        elements: 'Essential Writing Practices',
        elementList: [
          'Use standardized medical terminology from MeSH and ICD classification systems; define abbreviations at first use',
          'Report adverse events and safety outcomes with the same rigor as efficacy endpoints using MedDRA preferred terms',
          'Present tables with baseline characteristics, treatment outcomes, and subgroup analyses following journal-specific formatting',
          'Write a lay summary or clinical significance statement when required by the journal to improve accessibility',
          'Prepare ICMJE disclosure forms for all authors, specifying financial relationships, intellectual contributions, and data access'
        ],
        tips: 'Practical Advice for Graduate Students',
        tipList: [
          'Begin writing the Methods section during study design to ensure protocol alignment; update it after data collection is finalized',
          'Have a biostatistician review your analysis plan and Results section before submission to catch errors in statistical interpretation',
          'IRB approval is mandatory and must be obtained before any data collection; clearly state the protocol number and approval date in your manuscript',
          'Use reporting guidelines from the EQUATOR Network (equator-network.org) to select the appropriate checklist for your study design'
        ]
      }
    }
  ],

  // ======== 2. Nursing ========
  nursing: [
    {
      title: 'Paper Structure',
      content: 'Nursing research papers integrate clinical evidence with patient-centered perspectives, often blending quantitative outcomes and qualitative narratives within a structured framework.',
      details: {
        purpose: 'Structuring Nursing Research',
        purposeDesc: 'Nursing scholarship addresses the intersection of clinical practice, patient experience, and healthcare systems. Papers must clearly articulate the theoretical or conceptual framework guiding the study, the population of interest, and the clinical setting. Journals such as the Journal of Advanced Nursing (JAN) and Nursing Research expect manuscripts that bridge empirical findings and practice implications.',
        elements: 'Core Structural Components',
        elementList: [
          'Abstract summarizing background, aim, design, methods, results, and conclusions (structured format preferred by most nursing journals)',
          'Introduction with a clear statement of the research question, significance to nursing practice, and theoretical/conceptual framework (e.g., Orem, Roy, Parse)',
          'Methods describing the research design (quasi-experimental, mixed methods, phenomenological), sampling strategy, setting, and ethical approval',
          'Results organized by research question or theme, with quantitative data in tables and qualitative findings presented as themes with participant quotes',
          'Implications for practice section clearly translating findings into actionable recommendations for clinical nursing'
        ],
        tips: 'Structural Tips for Nursing Papers',
        tipList: [
          'Explicitly name and describe the nursing theory or conceptual framework in the Introduction; explain how it shaped the study design and interpretation',
          'Include a "Relevance to Clinical Practice" or "Implications for Nursing" section, as many nursing journals require this',
          'When reporting mixed-methods research, use the GRAMMS (Good Reporting of A Mixed Methods Study) guidelines or the COREQ checklist for qualitative components',
          'Describe the clinical setting in sufficient detail (e.g., unit type, patient acuity, nurse-to-patient ratio) to allow readers to assess transferability'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'Nursing research employs diverse methodologies including intervention studies, qualitative inquiry, and mixed-methods designs focused on patient outcomes and care delivery.',
      details: {
        purpose: 'Methodological Diversity in Nursing Science',
        purposeDesc: 'Nursing intervention research tests the effectiveness of care practices, educational programs, and system-level changes. Qualitative approaches such as phenomenology, grounded theory, and ethnography are central to understanding patient experiences and cultural dimensions of care. Mixed-methods designs are particularly valued for capturing both measurable outcomes and lived experiences.',
        elements: 'Key Methodological Approaches',
        elementList: [
          'Nursing intervention studies (pre-post, quasi-experimental, cluster RCT) measuring patient outcomes such as pain scores, readmission rates, and patient satisfaction',
          'Qualitative methods including interpretive phenomenology (understanding lived experience), grounded theory (generating theory from data), and content analysis',
          'Patient-reported outcome measures (PROMs) validated for nursing-sensitive indicators such as falls, pressure injuries, and medication errors',
          'Survey research using validated instruments (e.g., Maslach Burnout Inventory, Patient Satisfaction Questionnaire) with attention to reliability and validity',
          'Evidence synthesis methods including integrative reviews, scoping reviews, and meta-syntheses of qualitative studies'
        ],
        tips: 'Methodology Advice',
        tipList: [
          'For qualitative research, maintain an audit trail documenting coding decisions, memo writing, and theme development to demonstrate rigor and trustworthiness',
          'When measuring patient outcomes, select nursing-sensitive indicators endorsed by organizations such as the National Database of Nursing Quality Indicators (NDNQI)',
          'Pilot test any new intervention on a small sample first, documenting feasibility, acceptability, and preliminary outcomes before proceeding to a full-scale study',
          'Report inter-rater reliability (e.g., Cohen\'s kappa) when using observational measures or when multiple researchers code qualitative data'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'Nursing journals span clinical specialties, education, and policy, with a strong tradition of both quantitative and qualitative publishing.',
      details: {
        purpose: 'Publishing in Nursing Scholarship',
        purposeDesc: 'The nursing publication landscape includes general and specialty journals, with many indexed in CINAHL (Cumulative Index to Nursing and Allied Health Literature) as the discipline-specific database. High-impact journals value methodological rigor, clinical relevance, and clear implications for practice, education, or policy.',
        elements: 'Notable Journals and Databases',
        elementList: [
          'Journal of Advanced Nursing (JAN) - broad scope covering clinical, theoretical, and methodological nursing research',
          'Nursing Research - oldest nursing research journal, emphasizes rigorous quantitative and mixed-methods studies',
          'International Journal of Nursing Studies (IJNS) - strong international focus with high impact factor in nursing',
          'CINAHL (via EBSCOhost) as the primary nursing-specific database; PubMed for biomedical overlap; PsycINFO for mental health nursing topics',
          'Cochrane Nursing Care group reviews and Joanna Briggs Institute (JBI) evidence summaries for evidence-based practice resources'
        ],
        tips: 'Citation and Publication Tips',
        tipList: [
          'Most nursing journals use APA 7th edition citation style; check author guidelines carefully as some use Vancouver style for medically oriented journals',
          'Search CINAHL with nursing-specific subject headings in addition to PubMed MeSH terms to capture the full scope of nursing literature',
          'Cite the original validation studies when using standardized instruments (e.g., the Braden Scale, the Edmonton Symptom Assessment System)',
          'Consider open-access nursing journals (e.g., BMC Nursing, Journal of Nursing Scholarship) to maximize accessibility of your work'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'Nursing manuscripts should reflect the holistic, patient-centered nature of the discipline while maintaining scientific rigor and practical applicability.',
      details: {
        purpose: 'Writing for Nursing Audiences',
        purposeDesc: 'Effective nursing writing speaks to clinicians, educators, administrators, and policymakers. Manuscripts should contextualize findings within the realities of clinical practice, acknowledge the complexity of healthcare environments, and provide actionable recommendations. Patient voice and experience should be woven into the narrative wherever appropriate.',
        elements: 'Writing Essentials',
        elementList: [
          'Use person-first language (e.g., "patients with diabetes" rather than "diabetics") in accordance with APA and nursing ethics guidelines',
          'Include participant demographics and clinical characteristics in a well-formatted baseline table',
          'Present qualitative findings with direct participant quotes, pseudonyms, and demographic descriptors to add depth and credibility',
          'Write a clinical implications box or summary paragraph that nurses in practice can immediately understand and apply',
          'Acknowledge the role of the healthcare team and interdisciplinary collaboration rather than isolating nursing contributions'
        ],
        tips: 'Graduate Student Writing Advice',
        tipList: [
          'Start by identifying the target journal and tailor your manuscript structure, word count, and style to its author guidelines from the outset',
          'Use reflexivity statements in qualitative papers to disclose your positionality, clinical background, and potential biases as a nurse researcher',
          'When reporting nursing interventions, describe them with enough detail for replication using the TIDieR (Template for Intervention Description and Replication) checklist',
          'Seek feedback from both clinical nurses and research mentors before submission to ensure your paper resonates with practitioners and meets academic standards'
        ]
      }
    }
  ],

  // ======== 3. Pharmacy ========
  pharmacy: [
    {
      title: 'Paper Structure',
      content: 'Pharmacy research papers follow discipline-specific structures that vary by sub-area, including pharmacokinetic modeling studies, formulation development reports, and pharmacological experiment papers.',
      details: {
        purpose: 'Organizing Pharmaceutical Research',
        purposeDesc: 'Pharmaceutical sciences encompass a wide spectrum from bench-level drug discovery to clinical pharmacology. Manuscripts must present complex experimental data with precision, including chemical structures, dose-response curves, pharmacokinetic parameters, and formulation specifications. Journals like the Journal of Pharmaceutical Sciences and European Journal of Pharmaceutics and Biopharmaceutics expect methodical reporting that supports regulatory scrutiny.',
        elements: 'Structural Framework',
        elementList: [
          'Structured abstract including objective, methods, results, and conclusions; some journals require a graphical abstract for visual summary',
          'Introduction covering the drug target or formulation challenge, relevant pharmacology, and the specific gap the study addresses',
          'Materials and Methods with detailed descriptions of reagents (supplier, purity, lot number), equipment, analytical methods, and validation parameters',
          'Results section with pharmacokinetic parameters (Cmax, Tmax, AUC, t1/2), dissolution profiles, stability data, or dose-response curves presented in standardized tables and figures',
          'Discussion interpreting results in the context of drug development stages, regulatory requirements, and translational potential'
        ],
        tips: 'Structural Guidelines',
        tipList: [
          'Include chemical structures drawn with ChemDraw or equivalent software, using IUPAC nomenclature and CAS registry numbers',
          'Report analytical method validation parameters (linearity, accuracy, precision, LOD, LOQ) following ICH Q2(R1) guidelines',
          'For formulation studies, include a comprehensive formulation table listing all excipients with their function, grade, and concentration',
          'Provide raw pharmacokinetic data as supplementary material and include the software used for compartmental or non-compartmental analysis'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'Pharmaceutical research methodology spans pharmacokinetic modeling, formulation design and optimization, pharmacological screening, and clinical pharmacy practice research.',
      details: {
        purpose: 'Methodological Standards in Pharmaceutical Sciences',
        purposeDesc: 'Rigor in pharmaceutical research requires adherence to Good Laboratory Practice (GLP) for preclinical studies, ICH guidelines for clinical pharmacology, and validated analytical methods. Formulation scientists use Design of Experiments (DoE) and Quality by Design (QbD) approaches, while pharmacologists rely on standardized bioassays and receptor-binding studies.',
        elements: 'Core Methodologies',
        elementList: [
          'Pharmacokinetic studies: single/multiple-dose designs, bioequivalence studies, population PK modeling (NONMEM), PBPK simulation (Simcyp, GastroPlus)',
          'Formulation development: preformulation characterization, DoE (factorial, Box-Behnken, central composite designs), in-vitro dissolution testing (USP apparatus), stability studies (ICH Q1A)',
          'Pharmacological experiments: in-vitro cell-based assays (MTT, flow cytometry), ex-vivo organ bath studies, in-vivo animal models with dose-escalation protocols',
          'Analytical method development and validation: HPLC, LC-MS/MS, spectrophotometry following ICH Q2(R1) guidelines',
          'Clinical pharmacy research: medication adherence studies, pharmacovigilance, drug utilization reviews, and pharmacoeconomic analyses'
        ],
        tips: 'Methodology Tips',
        tipList: [
          'Document GLP compliance for all preclinical safety and toxicology studies; include the GLP certification status of the testing facility in your Methods section',
          'Use Quality by Design (QbD) principles with a defined Quality Target Product Profile (QTPP) and Critical Quality Attributes (CQAs) for formulation optimization',
          'For bioequivalence studies, follow FDA or EMA guidance on study design, sample size, and acceptance criteria (typically 80-125% for AUC and Cmax)',
          'Validate all bioanalytical methods according to FDA Bioanalytical Method Validation Guidance (2018) and report accuracy, precision, selectivity, and matrix effects'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'Pharmaceutical journals cover the drug development pipeline from discovery through formulation, clinical testing, and post-market surveillance.',
      details: {
        purpose: 'The Pharmaceutical Publication Ecosystem',
        purposeDesc: 'Publishing in pharmaceutical sciences requires matching your study type to the right journal audience. Basic pharmacological studies may suit journals like Molecular Pharmacology, while formulation work fits the Journal of Pharmaceutical Sciences or International Journal of Pharmaceutics. Regulatory science papers are increasingly published in journals like Therapeutic Innovation & Regulatory Science.',
        elements: 'Key Journals and Resources',
        elementList: [
          'Journal of Pharmaceutical Sciences (J Pharm Sci) - flagship journal covering pharmaceutics, pharmacokinetics, and drug delivery',
          'European Journal of Pharmaceutics and Biopharmaceutics - strong in formulation science, drug delivery systems, and biopharmaceutics',
          'Pharmaceutical Research - covers drug disposition, delivery, targeting, and pharmaceutical technology',
          'Clinical Pharmacology & Therapeutics and British Journal of Clinical Pharmacology for clinical pharmacology and translational studies',
          'SciFinder/CAS, PubMed, and Reaxys for comprehensive literature searches covering chemical, biological, and clinical pharmaceutical literature'
        ],
        tips: 'Citation and Publishing Advice',
        tipList: [
          'Cite regulatory guidance documents (FDA, EMA, ICH) with the full document code, title, and publication year; these are essential references in pharmaceutical research',
          'Include pharmacopoeial references (USP, EP, JP) when citing official monograph methods or excipient standards',
          'Use citation management tools to maintain consistent Vancouver or ACS citation formatting as required by the target journal',
          'When citing drug information, reference primary pharmacokinetic studies rather than tertiary sources like drug package inserts when possible'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'Pharmaceutical writing requires precise scientific language, regulatory awareness, and clear presentation of complex analytical and experimental data.',
      details: {
        purpose: 'Writing for Pharmaceutical Audiences',
        purposeDesc: 'Pharmaceutical manuscripts serve both academic researchers and industry professionals, including regulatory scientists. Writing must be precise enough for method replication, transparent enough for regulatory review, and accessible enough for interdisciplinary readers. Data presentation should support evidence-based decisions in drug development.',
        elements: 'Writing Essentials for Pharmacy',
        elementList: [
          'Use INN (International Nonproprietary Names) for drug substances and specify salt forms, polymorphs, and stereochemistry where relevant',
          'Report all concentrations with proper units and specify whether values represent free base or salt equivalents',
          'Present dissolution and release data with f2 similarity factor calculations when comparing formulations',
          'Include stability-indicating assay results with ICH storage conditions (25C/60% RH, 40C/75% RH) and time points clearly tabulated',
          'Describe scale-up considerations and critical process parameters (CPPs) for formulation studies to aid translational relevance'
        ],
        tips: 'Graduate Student Advice',
        tipList: [
          'Familiarize yourself with ICH guidelines (especially Q1-Q12) early in your training; they underpin regulatory science and are frequently referenced in pharmaceutical papers',
          'For pharmacokinetic manuscripts, present parameters in standardized tables with geometric means and 90% confidence intervals for bioequivalence studies',
          'Include a graphical abstract showing the formulation design, mechanism of action, or study workflow; many pharmaceutical journals now require or strongly prefer these',
          'Collaborate with regulatory science faculty or industry mentors to ensure your methods and reporting align with current regulatory expectations'
        ]
      }
    }
  ],

  // ======== 4. Public Health ========
  'public-health': [
    {
      title: 'Paper Structure',
      content: 'Public health research papers address population-level health issues using epidemiological, behavioral, and policy-oriented frameworks with an emphasis on real-world impact.',
      details: {
        purpose: 'Structuring Public Health Research',
        purposeDesc: 'Public health manuscripts must communicate research findings to diverse stakeholders including epidemiologists, policymakers, community health workers, and the public. The structure should clearly convey the public health significance of the research question, the population studied, and the implications for health policy or program implementation.',
        elements: 'Structural Components',
        elementList: [
          'Abstract with public health significance statement; some journals (e.g., American Journal of Public Health) require a separate "Public Health Implications" section',
          'Introduction framing the research question within the burden of disease, health disparities, or policy context using current epidemiological data',
          'Methods detailing study design (cross-sectional, cohort, case-control, ecological), sampling frame, data sources (national surveys, registries, primary data), and ethical considerations',
          'Results presenting prevalence, incidence, risk ratios, odds ratios, or cost-effectiveness ratios with appropriate measures of precision',
          'Discussion addressing policy implications, intervention recommendations, and limitations including potential for ecological fallacy or confounding'
        ],
        tips: 'Structural Best Practices',
        tipList: [
          'Use STROBE for observational studies, PRISMA for systematic reviews, or CHEERS for health economic evaluations as your reporting guideline',
          'Include a DAG (Directed Acyclic Graph) in the Methods section to transparently illustrate your causal assumptions and confounder selection strategy',
          'Present key findings in forest plots, epidemic curves, or geospatial maps to enhance visual communication of population-level data',
          'Write a plain-language summary or policy brief appendix if the journal allows, to facilitate uptake by non-academic stakeholders'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'Public health research employs epidemiological study designs, health surveys, program evaluations, and economic analyses to generate evidence for population health improvement.',
      details: {
        purpose: 'Methodological Approaches in Public Health',
        purposeDesc: 'Public health research methodology must account for the complexity of populations, social determinants of health, and the interplay between individual behaviors and systemic factors. Studies often use large-scale datasets, multi-level analyses, and community-based participatory approaches. Cost-effectiveness analysis (CEA) and health technology assessment (HTA) are critical for informing resource allocation decisions.',
        elements: 'Key Methodologies',
        elementList: [
          'Epidemiological study designs: prospective and retrospective cohort studies, case-control studies, cross-sectional surveys, and ecological studies using population-level data',
          'Health surveys using validated instruments (e.g., SF-36, EQ-5D, PHQ-9) with probability sampling, stratification, and survey weighting for population representativeness',
          'Cost-effectiveness analysis (CEA) and cost-utility analysis (CUA) using decision-analytic models (decision trees, Markov models) with QALYs or DALYs as outcome measures',
          'Multi-level modeling (hierarchical linear models) to account for clustering of individuals within communities, facilities, or geographic regions',
          'Community-based participatory research (CBPR) engaging stakeholders in study design, data collection, and dissemination'
        ],
        tips: 'Methodology Guidance',
        tipList: [
          'When using secondary datasets (e.g., NHANES, BRFSS, DHS), describe the original survey methodology, sampling weights, and any subset restrictions you applied',
          'For cost-effectiveness analyses, report both the ICER (incremental cost-effectiveness ratio) and a cost-effectiveness acceptability curve; conduct sensitivity analyses across plausible parameter ranges',
          'Address confounding using multiple strategies (multivariable regression, propensity score matching, instrumental variables) and discuss residual confounding explicitly',
          'Obtain ethical approval even for secondary data analyses and de-identified datasets; document the IRB determination (exempt, expedited, or full review) in your Methods section'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'Public health journals span epidemiology, health policy, global health, and health economics, with many offering open-access options to maximize public impact.',
      details: {
        purpose: 'Publishing in Public Health',
        purposeDesc: 'The public health publication landscape is broad and interdisciplinary. Choosing the right journal depends on the study type, geographic scope, and intended audience. Open-access journals are particularly important in public health because findings often need to reach policymakers, NGOs, and public health practitioners in resource-limited settings.',
        elements: 'Important Journals and Resources',
        elementList: [
          'BMC Public Health - high-volume open-access journal covering all aspects of public health research, widely indexed and accessible globally',
          'American Journal of Public Health (AJPH) - leading US-focused public health journal with strong policy influence and commentary section',
          'The Lancet Public Health and Lancet Global Health - high-impact journals for studies with broad population health significance',
          'International Journal of Epidemiology (IJE) and Epidemiology - top-tier journals for methodological epidemiological research',
          'PubMed, Global Health (CAB Abstracts), and Embase for comprehensive literature searching; WHO Global Health Library for international health policy documents'
        ],
        tips: 'Citation and Publishing Tips',
        tipList: [
          'Cite national and international health statistics from primary sources (WHO, CDC, national statistical agencies) with the dataset year and access date',
          'Reference health policy documents and clinical guidelines with their full title, issuing body, and publication year rather than citing secondary summaries',
          'Consider open-access publication to ensure findings reach policymakers and practitioners; many funders (NIH, Wellcome Trust, WHO) mandate open access',
          'Use APA or Vancouver citation style as specified by the target journal; public health journals vary widely in citation format requirements'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'Public health writing should be accessible, evidence-based, and action-oriented, connecting research findings to real-world health improvements and policy recommendations.',
      details: {
        purpose: 'Communicating Public Health Evidence',
        purposeDesc: 'Public health manuscripts must bridge the gap between academic research and actionable public health practice. Writers should present complex epidemiological data in an accessible manner, contextualize findings within the broader social determinants of health, and provide concrete recommendations for programs, policies, or future research.',
        elements: 'Writing Priorities',
        elementList: [
          'Frame research questions around the "So what?" factor: clearly explain why this health issue matters and who is affected',
          'Use inclusive, non-stigmatizing language following public health style guides (e.g., person-first language, avoiding "vulnerable" in favor of "under-resourced" or "marginalized")',
          'Present epidemiological data with both relative and absolute measures of association; report number needed to treat (NNT) when applicable',
          'Include geographic and demographic context so readers can assess generalizability and equity implications of findings',
          'Provide a clear "Implications for Public Health Practice" section with specific, actionable recommendations'
        ],
        tips: 'Advice for Graduate Students',
        tipList: [
          'Ground your literature review in global burden of disease data from GBD studies, WHO reports, or national surveillance systems to establish significance',
          'When writing about health disparities, explicitly name the structural and systemic factors contributing to inequities rather than attributing differences to individual behaviors',
          'Create clear data visualizations including stratified bar charts, maps, and trend lines that can be understood by non-specialists and potentially used in policy briefs',
          'Engage with public health practitioners and community stakeholders during the writing process to ensure your recommendations are feasible and contextually appropriate'
        ]
      }
    }
  ]
};


// ---------------------
// ARTS / SPORTS
// ---------------------

export const artsEn = {

  // ======== 5. Fine Arts & Design ========
  'fine-arts': [
    {
      title: 'Paper Structure',
      content: 'Fine arts and design research papers integrate visual documentation, critical theory, and practice-based inquiry within academic writing conventions.',
      details: {
        purpose: 'Structuring Practice-Based and Theoretical Research',
        purposeDesc: 'Research in fine arts and design bridges creative practice and scholarly inquiry. Papers may take the form of practice-based research (where the artwork is a form of inquiry), theoretical analyses, or empirical studies of design processes. Journals like Design Studies and Art Journal expect manuscripts that articulate the relationship between creative work and knowledge contribution.',
        elements: 'Structural Elements',
        elementList: [
          'Abstract contextualizing the research within art/design discourse, stating the research question, methodology, and contribution to knowledge',
          'Introduction situating the work within art historical, design theoretical, or cultural studies frameworks with a clear research aim',
          'Literature and contextual review drawing on art criticism, design theory, cultural studies, and relevant interdisciplinary scholarship',
          'Methodology section describing practice-based research methods (e.g., reflective practice, action research, research through design), artwork documentation, or empirical methods (surveys, experiments, case studies)',
          'Discussion and reflection connecting creative outputs or empirical findings to broader theoretical implications and future research directions'
        ],
        tips: 'Structural Advice',
        tipList: [
          'For practice-based research, include high-quality images of artwork or design prototypes with captions describing medium, dimensions, date, and context of creation',
          'Use visual documentation strategically: process images, studio photographs, and design iterations can serve as evidence of the research inquiry',
          'Clearly distinguish between the creative contribution and the scholarly contribution; articulate what new knowledge the practice generates beyond the artifact itself',
          'Consider using design thinking frameworks (e.g., Double Diamond, Stanford d.school model) to structure your methodology when applicable'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'Fine arts and design research draws on practice-based methods, visual analysis, design thinking, and interdisciplinary qualitative approaches.',
      details: {
        purpose: 'Methodological Approaches in Art and Design',
        purposeDesc: 'Research methodology in fine arts and design is inherently pluralistic. Practice-based research treats artistic or design practice as a mode of inquiry that generates new knowledge. Artwork analysis employs iconographic, semiotic, phenomenological, or formalist approaches. Design research may use human-centered design methods, ethnographic observation, or experimental user studies.',
        elements: 'Core Methodologies',
        elementList: [
          'Practice-based research (PBR) and practice-led research: the artwork or design artifact is central to the research process and outcome, with reflective journals documenting insights',
          'Visual and artwork analysis: iconographic analysis (Panofsky), semiotic analysis (Barthes, Peirce), formal analysis, and contextual/socio-political interpretation',
          'Design thinking and Research through Design (RtD): iterative prototyping, user testing, and reflection to generate design knowledge',
          'Qualitative methods adapted for art/design contexts: autoethnography, arts-based research methods (A/r/tography), phenomenological inquiry into aesthetic experience',
          'Empirical design research: user experience (UX) studies, A/B testing, eye-tracking, and survey-based evaluation of design effectiveness'
        ],
        tips: 'Methodology Tips',
        tipList: [
          'When conducting practice-based research, maintain a systematic research journal documenting decisions, reflections, and critical turning points throughout the creative process',
          'For artwork analysis, state your analytical framework explicitly and apply it consistently; avoid purely subjective interpretations without theoretical grounding',
          'If using design thinking in your research, document each phase (empathize, define, ideate, prototype, test) with evidence and explain how iterations led to new insights',
          'Triangulate methods where possible: combine visual analysis with interviews, archival research, or audience reception studies to strengthen your findings'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'Arts and design publications range from peer-reviewed academic journals to exhibition catalogs and design conference proceedings.',
      details: {
        purpose: 'Navigating Art and Design Publishing',
        purposeDesc: 'Publication in fine arts and design takes multiple forms: traditional journal articles, exhibition catalog essays, conference papers (e.g., CHI for HCI-related design, DRS for design research), and practice-based PhD portfolios. Academic journals increasingly value rigorous research methodologies alongside creative practice documentation.',
        elements: 'Key Publications and Resources',
        elementList: [
          'Design Studies - premier design research journal covering design cognition, methodology, and theory',
          'Art Journal (College Art Association) - peer-reviewed journal on contemporary art, criticism, and art history',
          'International Journal of Art & Design Education (iJADE) - research on art and design pedagogy and creative education',
          'Leonardo (MIT Press) - interdisciplinary journal connecting art, science, and technology',
          'DRS (Design Research Society) conference proceedings and ACM CHI proceedings for human-computer interaction and interaction design research'
        ],
        tips: 'Citation and Publishing Guidance',
        tipList: [
          'Follow Chicago Manual of Style (notes-bibliography system) for art history papers or APA for design research; verify your target journal\'s specific requirements',
          'When citing artworks, include artist name, title (italicized), date, medium, dimensions, and current collection/location following standard art historical citation conventions',
          'For design artifacts and prototypes, document with professional photographs and include supplementary materials (videos, interactive demos) when the journal\'s platform supports them',
          'Cite exhibition catalogs with curator/editor name, exhibition title, venue, dates, and publisher; these are important primary sources in art research'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'Writing in fine arts and design requires balancing descriptive richness, theoretical depth, and methodological transparency while making creative research accessible to academic readers.',
      details: {
        purpose: 'Effective Academic Writing in Art and Design',
        purposeDesc: 'Art and design research writing occupies a unique space between creative expression and academic rigor. Writers must articulate tacit knowledge gained through practice, analyze visual and material phenomena in words, and situate creative work within scholarly discourse. The challenge is to maintain intellectual depth without losing the experiential quality of the subject matter.',
        elements: 'Writing Essentials',
        elementList: [
          'Develop a precise visual vocabulary for describing artworks, materials, processes, and design features using discipline-specific terminology',
          'Integrate images and text cohesively; refer to figures explicitly in the body text and use them as evidence rather than mere illustration',
          'Articulate the research contribution clearly: what new knowledge, understanding, or methodology does this work generate?',
          'Engage critically with art/design theory rather than applying it superficially; show how theory illuminates or is challenged by the work',
          'Write reflectively about your own practice process when appropriate, distinguishing between personal narrative and analytical reflection'
        ],
        tips: 'Advice for Graduate Students',
        tipList: [
          'Read widely across art criticism, design theory, philosophy of aesthetics, and cultural studies to develop a rich theoretical vocabulary for your writing',
          'Practice writing ekphrasis (vivid description of visual works) as a skill; being able to translate visual experience into precise language is essential in this field',
          'For practice-based dissertations, plan the relationship between the written component and the creative portfolio early; they should complement and deepen each other',
          'Attend exhibitions, design critiques, and conferences to understand how practitioners and scholars discuss and evaluate creative research in your area'
        ]
      }
    }
  ],

  // ======== 6. Music ========
  music: [
    {
      title: 'Paper Structure',
      content: 'Music research papers accommodate diverse sub-disciplines including music theory, musicology, ethnomusicology, and acoustics, each with distinct structural expectations.',
      details: {
        purpose: 'Organizing Music Scholarship',
        purposeDesc: 'Music research spans the humanities, social sciences, and natural sciences. A music theory paper analyzing harmonic language differs fundamentally in structure from an acoustics study measuring spectral features or an ethnomusicographic fieldwork report. Writers must identify the appropriate structural conventions for their sub-discipline while maintaining scholarly rigor throughout.',
        elements: 'Structural Frameworks',
        elementList: [
          'Music theory papers: introduction with analytical premise, literature review of relevant theoretical approaches (Schenkerian, Neo-Riemannian, set theory), detailed analysis with score examples, and interpretive conclusions',
          'Musicological papers: historical contextualization, archival or source-based evidence, critical interpretation using appropriate historiographic or cultural theory frameworks',
          'Ethnomusicological papers: fieldwork description (site, community, positionality), theoretical framing (cultural relativism, post-colonial theory), analysis of musical practices within cultural context',
          'Music acoustics/psychology papers: IMRaD format with hypotheses, experimental design, acoustic measurements or perceptual data, statistical analysis, and discussion of cognitive implications',
          'Abstract, keywords, and supplementary materials (audio examples, score excerpts, spectrograms) linked or hosted on publisher platforms'
        ],
        tips: 'Structural Tips',
        tipList: [
          'Include notated musical examples within the text, numbered as figures, with clear captions indicating composer, work, measure numbers, and analytical markings',
          'For ethnomusicological work, address your positionality and relationship to the community studied in the methodology or a separate reflexivity section',
          'Use audio and video supplementary materials wherever possible; many journals now support multimedia hosting for musical examples',
          'Organize analytical sections around clearly defined research questions rather than chronological or movement-by-movement summaries of the music'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'Music research methodology ranges from score-based analysis and archival musicology to computational analysis, experimental acoustics, and ethnographic fieldwork.',
      details: {
        purpose: 'Methodological Breadth in Music Studies',
        purposeDesc: 'Music scholarship draws on an exceptionally wide range of methods. Theoretical analysis requires deep engagement with scores and analytical systems. Musicological research involves archival work, source criticism, and reception history. Ethnomusicology relies on participant observation, interviews, and fieldwork ethics. Music cognition and acoustics use laboratory experiments, psychoacoustic measurements, and computational modeling.',
        elements: 'Key Methodologies',
        elementList: [
          'Music analysis: Schenkerian analysis, motivic analysis, set-class and twelve-tone analysis, neo-Riemannian theory, topic theory, and computational/corpus-based analysis (e.g., using music21, Humdrum)',
          'Musicological methods: archival research, manuscript studies, critical edition preparation, reception history, and hermeneutic interpretation',
          'Ethnomusicological fieldwork: participant observation, structured and semi-structured interviews, audio/video recording and transcription, collaborative ethnography with community partners',
          'Experimental methods: psychoacoustic experiments, perceptual studies (discrimination, preference), physiological measurements (EEG, fMRI for music cognition), survey-based research on musical behaviors',
          'Computational musicology: digital corpus analysis, machine learning for style classification, audio feature extraction (MIR - Music Information Retrieval), network analysis of musical relationships'
        ],
        tips: 'Methodology Guidance',
        tipList: [
          'When presenting theoretical analyses, define your analytical terminology precisely and justify your choice of analytical framework in relation to the repertoire',
          'For ethnomusicological research, obtain IRB/ethics approval for human subjects research and discuss how you obtained informed consent from community participants',
          'In experimental acoustics or music cognition studies, report acoustic stimuli specifications (duration, amplitude, frequency content) and listener demographics in full detail',
          'When using computational methods, share your code and datasets (e.g., via GitHub or a data repository) to enable reproducibility and cite the software tools used'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'Music scholarship is published across humanities journals, society publications, and specialized sub-discipline outlets, each with distinct citation conventions.',
      details: {
        purpose: 'Publishing in Music Studies',
        purposeDesc: 'Music publishing reflects the discipline\'s diversity. Music theory has its own journals (Music Theory Spectrum, Music Theory Online), musicology publishes in the Journal of the American Musicological Society (JAMS) and ethnomusicology in Ethnomusicology. Acoustics and music cognition papers appear in journals like Music Perception and the Journal of the Acoustical Society of America. Understanding these publication ecosystems is crucial for targeting your work appropriately.',
        elements: 'Important Journals and Databases',
        elementList: [
          'Music Theory Spectrum (Society for Music Theory) - leading journal for analytical and theoretical music scholarship',
          'Journal of the American Musicological Society (JAMS) - premier venue for historical musicology and critical scholarship',
          'Ethnomusicology (Society for Ethnomusicology) - top journal for ethnomusicological fieldwork and cultural studies of music',
          'Music Perception - interdisciplinary journal covering music cognition, psychoacoustics, and perception',
          'RILM Abstracts of Music Literature as the primary bibliographic database; JSTOR and MUSE for full-text access to humanities music journals'
        ],
        tips: 'Citation and Publishing Tips',
        tipList: [
          'Most music humanities journals use Chicago Manual of Style (notes-bibliography); music science journals typically use APA; always verify with author guidelines',
          'When citing musical scores, include composer, title, editor (for critical editions), publisher, and catalog number (e.g., BWV, K., Op.) following standard musicological conventions',
          'Cite recordings with performer(s), work title, label, catalog number, and year; distinguish between historical recordings and modern performances',
          'For ethnomusicological sources, properly credit community collaborators, oral tradition bearers, and local knowledge holders in both the text and acknowledgments'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'Music writing demands the ability to describe sonic phenomena in words, integrate musical examples into prose, and engage diverse audiences from theorists to performers to scientists.',
      details: {
        purpose: 'Writing Effectively About Music',
        purposeDesc: 'Writing about music presents the unique challenge of translating auditory experience into written discourse. Whether describing harmonic progressions, cultural practices, or acoustic phenomena, music scholars must develop precise technical language while remaining accessible. Successful music writing weaves together score analysis, listening experience, cultural context, and theoretical insight.',
        elements: 'Writing Essentials',
        elementList: [
          'Develop fluency in describing musical sound using precise terminology: pitch, rhythm, timbre, texture, dynamics, form, and their sub-categories',
          'Integrate musical examples into your argument by analyzing them in the text; never include a score example without discussing it',
          'Balance close musical analysis with broader interpretive claims; avoid getting lost in technical detail without connecting to the larger argument',
          'Use consistent music-specific conventions: italic for titles of large-scale works, roman for songs/arias, standard pitch notation (C4 = middle C), and correct chord symbols',
          'Write for your intended audience: music theory readers expect analytical depth; musicology readers expect historical nuance; general readers need contextual framing'
        ],
        tips: 'Advice for Graduate Students',
        tipList: [
          'Listen actively and repeatedly to the music you analyze; your writing should reflect deep engagement with the sonic experience, not just the score',
          'Learn to engrave musical examples professionally using notation software (Sibelius, Finale, MuseScore, Lilypond) and ensure they are publication-quality',
          'For ethnomusicological writing, prioritize the voices and perspectives of your interlocutors while maintaining analytical rigor; use direct quotes and translated lyrics thoughtfully',
          'Join the relevant scholarly society (SMT, AMS, SEM) to access mentoring, conference presentation opportunities, and publication guidance specific to your sub-discipline'
        ]
      }
    }
  ],

  // ======== 7. Sports Science ========
  sports: [
    {
      title: 'Paper Structure',
      content: 'Sports science papers follow the IMRaD format adapted for sub-disciplines including exercise physiology, sport psychology, biomechanics, and sport management.',
      details: {
        purpose: 'Structuring Sports Science Research',
        purposeDesc: 'Sports science is a multidisciplinary field drawing on physiology, psychology, biomechanics, nutrition, and coaching science. Papers must clearly identify the sub-discipline, the athletic population studied, and the practical applications for sport performance, injury prevention, or health promotion. The Journal of Sports Sciences, Medicine & Science in Sports & Exercise, and the British Journal of Sports Medicine set high standards for reporting quality.',
        elements: 'Structural Components',
        elementList: [
          'Structured abstract with purpose, methods, results, and conclusions; some journals require a "Practical Applications" or "New Findings" section',
          'Introduction reviewing current evidence, identifying the research gap, and stating specific hypotheses or research questions with practical relevance to sport',
          'Methods with detailed participant characteristics (age, training status, sport level, injury history), testing protocols, equipment specifications, and ethical approval',
          'Results presenting performance data, physiological measurements, or psychological scores with effect sizes (Cohen\'s d, eta-squared) alongside statistical significance',
          'Discussion interpreting findings in the context of sport performance, training prescription, or athlete health with explicit practical recommendations'
        ],
        tips: 'Structural Best Practices',
        tipList: [
          'Classify participants precisely using standardized terminology (e.g., "recreationally active," "trained," "highly trained," "elite" as defined by McKay et al. or De Pauw et al.)',
          'Include a study design figure or timeline showing familiarization sessions, testing sessions, washout periods, and intervention phases',
          'Present individual data points (e.g., dot plots or spaghetti plots) alongside group means to show individual responses to training or interventions',
          'Use the CONSORT-SPI (Sport and Physical Interventions) extension for randomized trials or STROBE for observational studies in sport settings'
        ]
      }
    },
    {
      title: 'Research Methodology',
      content: 'Sports science research employs laboratory and field-based methods spanning exercise physiology, sport psychology, biomechanics, and performance analysis.',
      details: {
        purpose: 'Methodological Rigor in Sports Science',
        purposeDesc: 'Sports science research must balance internal validity (laboratory control) with ecological validity (real-world sport settings). Exercise physiology studies use gold-standard laboratory measures, biomechanics research employs sophisticated motion capture and force measurement systems, and sport psychology draws on validated psychometric instruments and qualitative interview methods.',
        elements: 'Core Methodologies',
        elementList: [
          'Exercise physiology: VO2max testing (gas analysis), lactate threshold determination, body composition (DEXA, skinfolds), muscle biopsy, blood biomarker analysis, and graded exercise testing protocols',
          'Sport psychology: validated questionnaires (CSAI-2, POMS, AIMS), interviews (IPA, thematic analysis), observational studies, single-case experimental designs, and psychological skills training interventions',
          'Biomechanics: 3D motion capture (Vicon, Qualisys), force plates (ground reaction forces), EMG (muscle activation patterns), inertial measurement units (IMUs), and musculoskeletal modeling (OpenSim)',
          'Performance analysis: GPS/GNSS tracking (PlayerTek, Catapult), time-motion analysis, notational analysis, video-based tactical analysis, and machine learning for performance prediction',
          'Training science: periodization studies, dose-response relationships, repeated-measures crossover designs, and monitoring tools (RPE, HRV, wellness questionnaires)'
        ],
        tips: 'Methodology Tips',
        tipList: [
          'Report test-retest reliability (ICC, CV%) and typical error of measurement for all primary outcome measures; these are critical for interpreting meaningful change in sport science',
          'For motion capture studies, clearly specify marker placement protocols (e.g., Plug-in Gait, Helen Hayes), capture frequency, and data processing steps (filtering, gap-filling)',
          'In sport psychology, use reflexive thematic analysis (Braun & Clarke) or interpretive phenomenological analysis (IPA) with transparent coding procedures and member checking',
          'When studying elite athletes, acknowledge small sample sizes as a limitation and consider using magnitude-based decisions or Bayesian statistics alongside traditional hypothesis testing'
        ]
      }
    },
    {
      title: 'Key Journals & Citation',
      content: 'Sports science journals cover sub-disciplines from exercise physiology and biomechanics to sport psychology and coaching, with many requiring practical application statements.',
      details: {
        purpose: 'The Sports Science Publication Landscape',
        purposeDesc: 'Sports science publishing serves both researchers and practitioners (coaches, sports medicine physicians, strength and conditioning professionals). Journals vary in their emphasis on basic science versus applied practice. Selecting the right outlet requires matching your study\'s focus, methodology, and intended audience to the journal\'s scope and readership.',
        elements: 'Key Journals and Resources',
        elementList: [
          'Journal of Sports Sciences - broad-scope journal covering physiology, biomechanics, psychology, performance analysis, and coaching',
          'Medicine & Science in Sports & Exercise (MSSE) - official journal of ACSM, strong in exercise physiology and sports medicine',
          'British Journal of Sports Medicine (BJSM) - high-impact journal focused on sport and exercise medicine, injury prevention, and physical activity',
          'Journal of Strength and Conditioning Research (JSCR) - applied research on resistance training, conditioning, and performance enhancement',
          'SPORTDiscus (via EBSCOhost) as the primary sports science database; PubMed for exercise physiology and sports medicine; PsycINFO for sport psychology'
        ],
        tips: 'Citation and Publishing Tips',
        tipList: [
          'Most sports science journals use APA or Vancouver citation style; MSSE uses its own modified Vancouver format with specific abbreviation conventions',
          'Cite position statements and consensus guidelines from professional bodies (ACSM, IOC, NSCA, BASES) with the full organization name, document title, and year',
          'When referencing normative performance data, cite the original study establishing the norms and specify the population (e.g., "elite male soccer players, Premier League")',
          'Include supplementary materials such as video clips of testing protocols, raw GPS data files, or detailed statistical outputs to enhance transparency and reproducibility'
        ]
      }
    },
    {
      title: 'Practical Writing Tips',
      content: 'Sports science writing should connect scientific findings to practical applications for coaches, athletes, clinicians, and sport organizations.',
      details: {
        purpose: 'Bridging Science and Practice in Sport',
        purposeDesc: 'The ultimate value of sports science research lies in its translation to practice. Manuscripts should communicate findings in a way that is accessible to practitioners while maintaining scientific rigor. This means including practical recommendations, contextualizing effect sizes in sport-relevant terms, and considering the real-world constraints of training environments.',
        elements: 'Writing Essentials',
        elementList: [
          'Report effect sizes (Cohen\'s d, Hedges\' g) and interpret their magnitude using sport-specific benchmarks rather than generic thresholds',
          'Express physiological changes in practically meaningful units (e.g., "1.2% improvement in 40m sprint time, equivalent to approximately 0.06 seconds")',
          'Include a "Practical Applications" section with specific recommendations for coaches, athletes, or practitioners',
          'Present data visualizations that practitioners can interpret: bar charts with individual responses, radar charts for performance profiles, heat maps for tactical analysis',
          'Describe equipment and protocols with enough detail for replication in both laboratory and field settings'
        ],
        tips: 'Advice for Graduate Students',
        tipList: [
          'Collaborate with coaches and athletes during study design to ensure your research questions and protocols are ecologically valid and practically relevant',
          'Learn to operate and troubleshoot key equipment (motion capture, metabolic carts, force plates, GPS units) before beginning data collection; technical competence strengthens your methods',
          'When writing about elite athletes, protect participant confidentiality given the small population size; avoid reporting data that could identify individual athletes without consent',
          'Present at both academic conferences (ECSS, ACSM) and practitioner conferences (NSCA, UKSCA) to develop your ability to communicate findings to different audiences'
        ]
      }
    }
  ]
};
