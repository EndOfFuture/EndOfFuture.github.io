(function() {
    const codonTable = {
        'TTT':{fullName:'苯丙氨酸',threeLetter:'Phe',oneLetter:'F',category:'aromatic',categoryCN:'芳香族/疏水'},
        'TTC':{fullName:'苯丙氨酸',threeLetter:'Phe',oneLetter:'F',category:'aromatic',categoryCN:'芳香族/疏水'},
        'TTA':{fullName:'亮氨酸',threeLetter:'Leu',oneLetter:'L',category:'hydrophobic',categoryCN:'疏水性'},
        'TTG':{fullName:'亮氨酸',threeLetter:'Leu',oneLetter:'L',category:'hydrophobic',categoryCN:'疏水性'},
        'CTT':{fullName:'亮氨酸',threeLetter:'Leu',oneLetter:'L',category:'hydrophobic',categoryCN:'疏水性'},
        'CTC':{fullName:'亮氨酸',threeLetter:'Leu',oneLetter:'L',category:'hydrophobic',categoryCN:'疏水性'},
        'CTA':{fullName:'亮氨酸',threeLetter:'Leu',oneLetter:'L',category:'hydrophobic',categoryCN:'疏水性'},
        'CTG':{fullName:'亮氨酸',threeLetter:'Leu',oneLetter:'L',category:'hydrophobic',categoryCN:'疏水性'},
        'ATT':{fullName:'异亮氨酸',threeLetter:'Ile',oneLetter:'I',category:'hydrophobic',categoryCN:'疏水性'},
        'ATC':{fullName:'异亮氨酸',threeLetter:'Ile',oneLetter:'I',category:'hydrophobic',categoryCN:'疏水性'},
        'ATA':{fullName:'异亮氨酸',threeLetter:'Ile',oneLetter:'I',category:'hydrophobic',categoryCN:'疏水性'},
        'ATG':{fullName:'甲硫氨酸',threeLetter:'Met',oneLetter:'M',category:'special',categoryCN:'起始/特殊',isStart:true},
        'GTT':{fullName:'缬氨酸',threeLetter:'Val',oneLetter:'V',category:'hydrophobic',categoryCN:'疏水性'},
        'GTC':{fullName:'缬氨酸',threeLetter:'Val',oneLetter:'V',category:'hydrophobic',categoryCN:'疏水性'},
        'GTA':{fullName:'缬氨酸',threeLetter:'Val',oneLetter:'V',category:'hydrophobic',categoryCN:'疏水性'},
        'GTG':{fullName:'缬氨酸',threeLetter:'Val',oneLetter:'V',category:'hydrophobic',categoryCN:'疏水性'},
        'TCT':{fullName:'丝氨酸',threeLetter:'Ser',oneLetter:'S',category:'polar',categoryCN:'极性不带电'},
        'TCC':{fullName:'丝氨酸',threeLetter:'Ser',oneLetter:'S',category:'polar',categoryCN:'极性不带电'},
        'TCA':{fullName:'丝氨酸',threeLetter:'Ser',oneLetter:'S',category:'polar',categoryCN:'极性不带电'},
        'TCG':{fullName:'丝氨酸',threeLetter:'Ser',oneLetter:'S',category:'polar',categoryCN:'极性不带电'},
        'AGT':{fullName:'丝氨酸',threeLetter:'Ser',oneLetter:'S',category:'polar',categoryCN:'极性不带电'},
        'AGC':{fullName:'丝氨酸',threeLetter:'Ser',oneLetter:'S',category:'polar',categoryCN:'极性不带电'},
        'CCT':{fullName:'脯氨酸',threeLetter:'Pro',oneLetter:'P',category:'special',categoryCN:'特殊（亚氨基）'},
        'CCC':{fullName:'脯氨酸',threeLetter:'Pro',oneLetter:'P',category:'special',categoryCN:'特殊（亚氨基）'},
        'CCA':{fullName:'脯氨酸',threeLetter:'Pro',oneLetter:'P',category:'special',categoryCN:'特殊（亚氨基）'},
        'CCG':{fullName:'脯氨酸',threeLetter:'Pro',oneLetter:'P',category:'special',categoryCN:'特殊（亚氨基）'},
        'ACT':{fullName:'苏氨酸',threeLetter:'Thr',oneLetter:'T',category:'polar',categoryCN:'极性不带电'},
        'ACC':{fullName:'苏氨酸',threeLetter:'Thr',oneLetter:'T',category:'polar',categoryCN:'极性不带电'},
        'ACA':{fullName:'苏氨酸',threeLetter:'Thr',oneLetter:'T',category:'polar',categoryCN:'极性不带电'},
        'ACG':{fullName:'苏氨酸',threeLetter:'Thr',oneLetter:'T',category:'polar',categoryCN:'极性不带电'},
        'GCT':{fullName:'丙氨酸',threeLetter:'Ala',oneLetter:'A',category:'hydrophobic',categoryCN:'疏水性'},
        'GCC':{fullName:'丙氨酸',threeLetter:'Ala',oneLetter:'A',category:'hydrophobic',categoryCN:'疏水性'},
        'GCA':{fullName:'丙氨酸',threeLetter:'Ala',oneLetter:'A',category:'hydrophobic',categoryCN:'疏水性'},
        'GCG':{fullName:'丙氨酸',threeLetter:'Ala',oneLetter:'A',category:'hydrophobic',categoryCN:'疏水性'},
        'TAT':{fullName:'酪氨酸',threeLetter:'Tyr',oneLetter:'Y',category:'aromatic',categoryCN:'芳香族'},
        'TAC':{fullName:'酪氨酸',threeLetter:'Tyr',oneLetter:'Y',category:'aromatic',categoryCN:'芳香族'},
        'TAA':{fullName:'终止密码子',threeLetter:'Stop',oneLetter:'*',category:'stop',categoryCN:'终止',isStop:true},
        'TAG':{fullName:'终止密码子',threeLetter:'Stop',oneLetter:'*',category:'stop',categoryCN:'终止',isStop:true},
        'TGA':{fullName:'终止密码子',threeLetter:'Stop',oneLetter:'*',category:'stop',categoryCN:'终止',isStop:true},
        'CAT':{fullName:'组氨酸',threeLetter:'His',oneLetter:'H',category:'positive',categoryCN:'碱性（+）'},
        'CAC':{fullName:'组氨酸',threeLetter:'His',oneLetter:'H',category:'positive',categoryCN:'碱性（+）'},
        'CAA':{fullName:'谷氨酰胺',threeLetter:'Gln',oneLetter:'Q',category:'polar',categoryCN:'极性不带电'},
        'CAG':{fullName:'谷氨酰胺',threeLetter:'Gln',oneLetter:'Q',category:'polar',categoryCN:'极性不带电'},
        'AAT':{fullName:'天冬酰胺',threeLetter:'Asn',oneLetter:'N',category:'polar',categoryCN:'极性不带电'},
        'AAC':{fullName:'天冬酰胺',threeLetter:'Asn',oneLetter:'N',category:'polar',categoryCN:'极性不带电'},
        'AAA':{fullName:'赖氨酸',threeLetter:'Lys',oneLetter:'K',category:'positive',categoryCN:'碱性（+）'},
        'AAG':{fullName:'赖氨酸',threeLetter:'Lys',oneLetter:'K',category:'positive',categoryCN:'碱性（+）'},
        'GAT':{fullName:'天冬氨酸',threeLetter:'Asp',oneLetter:'D',category:'negative',categoryCN:'酸性（−）'},
        'GAC':{fullName:'天冬氨酸',threeLetter:'Asp',oneLetter:'D',category:'negative',categoryCN:'酸性（−）'},
        'GAA':{fullName:'谷氨酸',threeLetter:'Glu',oneLetter:'E',category:'negative',categoryCN:'酸性（−）'},
        'GAG':{fullName:'谷氨酸',threeLetter:'Glu',oneLetter:'E',category:'negative',categoryCN:'酸性（−）'},
        'TGT':{fullName:'半胱氨酸',threeLetter:'Cys',oneLetter:'C',category:'special',categoryCN:'特殊（含硫）'},
        'TGC':{fullName:'半胱氨酸',threeLetter:'Cys',oneLetter:'C',category:'special',categoryCN:'特殊（含硫）'},
        'TGG':{fullName:'色氨酸',threeLetter:'Trp',oneLetter:'W',category:'aromatic',categoryCN:'芳香族'},
        'CGT':{fullName:'精氨酸',threeLetter:'Arg',oneLetter:'R',category:'positive',categoryCN:'碱性（+）'},
        'CGC':{fullName:'精氨酸',threeLetter:'Arg',oneLetter:'R',category:'positive',categoryCN:'碱性（+）'},
        'CGA':{fullName:'精氨酸',threeLetter:'Arg',oneLetter:'R',category:'positive',categoryCN:'碱性（+）'},
        'CGG':{fullName:'精氨酸',threeLetter:'Arg',oneLetter:'R',category:'positive',categoryCN:'碱性（+）'},
        'AGA':{fullName:'精氨酸',threeLetter:'Arg',oneLetter:'R',category:'positive',categoryCN:'碱性（+）'},
        'AGG':{fullName:'精氨酸',threeLetter:'Arg',oneLetter:'R',category:'positive',categoryCN:'碱性（+）'},
        'GGT':{fullName:'甘氨酸',threeLetter:'Gly',oneLetter:'G',category:'special',categoryCN:'特殊（柔性）'},
        'GGC':{fullName:'甘氨酸',threeLetter:'Gly',oneLetter:'G',category:'special',categoryCN:'特殊（柔性）'},
        'GGA':{fullName:'甘氨酸',threeLetter:'Gly',oneLetter:'G',category:'special',categoryCN:'特殊（柔性）'},
        'GGG':{fullName:'甘氨酸',threeLetter:'Gly',oneLetter:'G',category:'special',categoryCN:'特殊（柔性）'},
    };
    const aaDetailsData = {
        'F':{nameCN:'苯丙氨酸',nameEN:'Phenylalanine',threeLetter:'Phe',oneLetter:'F',category:'aromatic',categoryCN:'芳香族/疏水',molecularWeight:'165.19',isoelectricPoint:'5.48',polarity:'非极性',hydropathy:'疏水',structure:'含苯环侧链，必需氨基酸。',description:'苯丙氨酸是人体<strong>必需氨基酸</strong>，侧链含苯环，具有强疏水性和紫外吸收。是酪氨酸和多种神经递质的前体。',codons:['TTT','TTC'],imageSrc:'Phe.png'},
        'L':{nameCN:'亮氨酸',nameEN:'Leucine',threeLetter:'Leu',oneLetter:'L',category:'hydrophobic',categoryCN:'疏水性',molecularWeight:'131.17',isoelectricPoint:'5.98',polarity:'非极性',hydropathy:'疏水',structure:'含异丁基侧链，BCAA之一。',description:'亮氨酸是<strong>必需氨基酸</strong>，属支链氨基酸。激活mTOR通路促进肌肉蛋白合成。',codons:['TTA','TTG','CTT','CTC','CTA','CTG'],imageSrc:'Leu.png'},
        'I':{nameCN:'异亮氨酸',nameEN:'Isoleucine',threeLetter:'Ile',oneLetter:'I',category:'hydrophobic',categoryCN:'疏水性',molecularWeight:'131.17',isoelectricPoint:'6.02',polarity:'非极性',hydropathy:'疏水',structure:'含仲丁基侧链，BCAA之一。',description:'异亮氨酸是<strong>必需氨基酸</strong>，属支链氨基酸，参与肌肉代谢和能量调节。',codons:['ATT','ATC','ATA'],imageSrc:'Ile.png'},
        'M':{nameCN:'甲硫氨酸',nameEN:'Methionine',threeLetter:'Met',oneLetter:'M',category:'special',categoryCN:'起始/特殊（含硫）',molecularWeight:'149.21',isoelectricPoint:'5.74',polarity:'非极性',hydropathy:'疏水',structure:'含硫甲基侧链，翻译起始氨基酸。',description:'甲硫氨酸是<strong>必需氨基酸</strong>，所有蛋白质合成的起始氨基酸。参与甲基化反应，是SAM的前体。',codons:['ATG'],isStart:true,imageSrc:'Met.png'},
        'V':{nameCN:'缬氨酸',nameEN:'Valine',threeLetter:'Val',oneLetter:'V',category:'hydrophobic',categoryCN:'疏水性',molecularWeight:'117.15',isoelectricPoint:'5.96',polarity:'非极性',hydropathy:'疏水',structure:'含异丙基侧链，BCAA之一。',description:'缬氨酸是<strong>必需氨基酸</strong>，属支链氨基酸，参与能量代谢和组织修复。',codons:['GTT','GTC','GTA','GTG'],imageSrc:'Val.png'},
        'S':{nameCN:'丝氨酸',nameEN:'Serine',threeLetter:'Ser',oneLetter:'S',category:'polar',categoryCN:'极性不带电',molecularWeight:'105.09',isoelectricPoint:'5.68',polarity:'极性',hydropathy:'亲水',structure:'含羟甲基侧链，磷酸化关键位点。',description:'丝氨酸是<strong>非必需氨基酸</strong>，侧链羟基使其亲水。是蛋白质磷酸化的主要靶点。',codons:['TCT','TCC','TCA','TCG','AGT','AGC'],imageSrc:'Ser.png'},
        'P':{nameCN:'脯氨酸',nameEN:'Proline',threeLetter:'Pro',oneLetter:'P',category:'special',categoryCN:'特殊（亚氨基）',molecularWeight:'115.13',isoelectricPoint:'6.30',polarity:'非极性',hydropathy:'疏水',structure:'侧链与主链形成环状结构，α-螺旋破坏者。',description:'脯氨酸是独特的亚氨基酸，环状结构限制主链旋转。胶原蛋白中含量极高。',codons:['CCT','CCC','CCA','CCG'],imageSrc:'Pro.png'},
        'T':{nameCN:'苏氨酸',nameEN:'Threonine',threeLetter:'Thr',oneLetter:'T',category:'polar',categoryCN:'极性不带电',molecularWeight:'119.12',isoelectricPoint:'5.60',polarity:'极性',hydropathy:'亲水',structure:'含羟乙基侧链，必需氨基酸。',description:'苏氨酸是<strong>必需氨基酸</strong>，参与蛋白质糖基化和免疫球蛋白合成。',codons:['ACT','ACC','ACA','ACG'],imageSrc:'Thr.png'},
        'A':{nameCN:'丙氨酸',nameEN:'Alanine',threeLetter:'Ala',oneLetter:'A',category:'hydrophobic',categoryCN:'疏水性',molecularWeight:'89.09',isoelectricPoint:'6.00',polarity:'非极性',hydropathy:'疏水',structure:'最简单的氨基酸之一，侧链为甲基。',description:'丙氨酸结构简单，在葡萄糖-丙氨酸循环中起关键作用。常用于突变扫描实验。',codons:['GCT','GCC','GCA','GCG'],imageSrc:'Ala.png'},
        'Y':{nameCN:'酪氨酸',nameEN:'Tyrosine',threeLetter:'Tyr',oneLetter:'Y',category:'aromatic',categoryCN:'芳香族',molecularWeight:'181.19',isoelectricPoint:'5.66',polarity:'极性',hydropathy:'疏水/亲水',structure:'含对羟基苯环，磷酸化重要位点。',description:'酪氨酸含酚羟基，是蛋白质磷酸化关键位点。为多巴胺等神经递质前体。',codons:['TAT','TAC'],imageSrc:'Tyr.png'},
        '*':{nameCN:'终止密码子',nameEN:'Stop Codon',threeLetter:'Stop',oneLetter:'*',category:'stop',categoryCN:'翻译终止信号',molecularWeight:'—',isoelectricPoint:'—',polarity:'—',hydropathy:'—',structure:'TAA/TAG/TGA。',description:'<strong>终止密码子</strong>不编码氨基酸，发出翻译终止信号。三种：TAA（赭石）、TAG（琥珀）、TGA（蛋白石）。',codons:['TAA','TAG','TGA'],isStop:true,imageSrc:''},
        'H':{nameCN:'组氨酸',nameEN:'Histidine',threeLetter:'His',oneLetter:'H',category:'positive',categoryCN:'碱性（+）',molecularWeight:'155.16',isoelectricPoint:'7.59',polarity:'极性',hydropathy:'亲水',structure:'含咪唑环，pKa≈6.0。',description:'组氨酸侧链咪唑环在生理pH附近可切换质子化状态，常出现在酶活性中心。半必需氨基酸。',codons:['CAT','CAC'],imageSrc:'His.png'},
        'Q':{nameCN:'谷氨酰胺',nameEN:'Glutamine',threeLetter:'Gln',oneLetter:'Q',category:'polar',categoryCN:'极性不带电',molecularWeight:'146.14',isoelectricPoint:'5.65',polarity:'极性',hydropathy:'亲水',structure:'含酰胺基侧链，氮转运载体。',description:'谷氨酰胺是人体最丰富的游离氨基酸，参与氮代谢和氨解毒。快速分裂细胞的能量来源。',codons:['CAA','CAG'],imageSrc:'Gln.png'},
        'N':{nameCN:'天冬酰胺',nameEN:'Asparagine',threeLetter:'Asn',oneLetter:'N',category:'polar',categoryCN:'极性不带电',molecularWeight:'132.12',isoelectricPoint:'5.41',polarity:'极性',hydropathy:'亲水',structure:'含酰胺基侧链，N-糖基化位点。',description:'天冬酰胺侧链酰胺基团是N-糖基化修饰的主要靶点。可由天冬氨酸转化而来。',codons:['AAT','AAC'],imageSrc:'Asn.png'},
        'K':{nameCN:'赖氨酸',nameEN:'Lysine',threeLetter:'Lys',oneLetter:'K',category:'positive',categoryCN:'碱性（+）',molecularWeight:'146.19',isoelectricPoint:'9.74',polarity:'极性',hydropathy:'亲水',structure:'含长链ε-氨基，必需氨基酸。',description:'赖氨酸是必需氨基酸，ε-氨基是泛素化修饰位点。参与胶原蛋白交联。',codons:['AAA','AAG'],imageSrc:'Lys.png'},
        'D':{nameCN:'天冬氨酸',nameEN:'Aspartic Acid',threeLetter:'Asp',oneLetter:'D',category:'negative',categoryCN:'酸性（−）',molecularWeight:'133.10',isoelectricPoint:'2.77',polarity:'极性',hydropathy:'亲水',structure:'含羧基侧链，生理条件下带负电。',description:'天冬氨酸是酸性氨基酸，侧链羧基参与酸碱催化。常出现在酶活性中心。',codons:['GAT','GAC'],imageSrc:'Asp.png'},
        'E':{nameCN:'谷氨酸',nameEN:'Glutamic Acid',threeLetter:'Glu',oneLetter:'E',category:'negative',categoryCN:'酸性（−）',molecularWeight:'147.13',isoelectricPoint:'3.22',polarity:'极性',hydropathy:'亲水',structure:'含羧基侧链，主要兴奋性神经递质。',description:'谷氨酸是中枢神经系统主要的兴奋性神经递质，在学习记忆中起核心作用。',codons:['GAA','GAG'],imageSrc:'Glu.png'},
        'C':{nameCN:'半胱氨酸',nameEN:'Cysteine',threeLetter:'Cys',oneLetter:'C',category:'special',categoryCN:'特殊（含硫，二硫键）',molecularWeight:'121.16',isoelectricPoint:'5.07',polarity:'极性',hydropathy:'可变',structure:'含巯基（-SH），可形成二硫键。',description:'半胱氨酸的巯基可形成二硫键，稳定蛋白质结构。是谷胱甘肽的组成成分。',codons:['TGT','TGC'],imageSrc:'Cys.png'},
        'W':{nameCN:'色氨酸',nameEN:'Tryptophan',threeLetter:'Trp',oneLetter:'W',category:'aromatic',categoryCN:'芳香族',molecularWeight:'204.23',isoelectricPoint:'5.89',polarity:'非极性',hydropathy:'疏水',structure:'含吲哚环，最大侧链之一。',description:'色氨酸是必需氨基酸，具有吲哚环。是血清素和褪黑素的前体。仅由一个密码子TGG编码。',codons:['TGG'],imageSrc:'Trp.png'},
        'R':{nameCN:'精氨酸',nameEN:'Arginine',threeLetter:'Arg',oneLetter:'R',category:'positive',categoryCN:'碱性（+）',molecularWeight:'174.20',isoelectricPoint:'10.76',polarity:'极性',hydropathy:'亲水',structure:'含胍基，碱性最强。',description:'精氨酸侧链胍基始终带正电。是一氧化氮（NO）前体，参与尿素循环。',codons:['CGT','CGC','CGA','CGG','AGA','AGG'],imageSrc:'Arg.png'},
        'G':{nameCN:'甘氨酸',nameEN:'Glycine',threeLetter:'Gly',oneLetter:'G',category:'special',categoryCN:'特殊（最小，柔性最强）',molecularWeight:'75.07',isoelectricPoint:'5.97',polarity:'非极性',hydropathy:'中性',structure:'最简单的氨基酸，侧链仅为氢。',description:'甘氨酸是最小、唯一非手性氨基酸。赋予蛋白质极大柔性，是抑制性神经递质。',codons:['GGT','GGC','GGA','GGG'],imageSrc:'Gly.png'}
    };
    const aaGroups = [
        {name:'苯丙氨酸',abbr:'Phe',letter:'F',category:'aromatic',catCN:'芳香族/疏水',codons:['TTT','TTC']},
        {name:'亮氨酸',abbr:'Leu',letter:'L',category:'hydrophobic',catCN:'疏水性',codons:['TTA','TTG','CTT','CTC','CTA','CTG']},
        {name:'异亮氨酸',abbr:'Ile',letter:'I',category:'hydrophobic',catCN:'疏水性',codons:['ATT','ATC','ATA']},
        {name:'甲硫氨酸',abbr:'Met',letter:'M',category:'special',catCN:'起始/特殊',codons:['ATG'],isStart:true},
        {name:'缬氨酸',abbr:'Val',letter:'V',category:'hydrophobic',catCN:'疏水性',codons:['GTT','GTC','GTA','GTG']},
        {name:'丝氨酸',abbr:'Ser',letter:'S',category:'polar',catCN:'极性不带电',codons:['TCT','TCC','TCA','TCG','AGT','AGC']},
        {name:'脯氨酸',abbr:'Pro',letter:'P',category:'special',catCN:'特殊（亚氨基）',codons:['CCT','CCC','CCA','CCG']},
        {name:'苏氨酸',abbr:'Thr',letter:'T',category:'polar',catCN:'极性不带电',codons:['ACT','ACC','ACA','ACG']},
        {name:'丙氨酸',abbr:'Ala',letter:'A',category:'hydrophobic',catCN:'疏水性',codons:['GCT','GCC','GCA','GCG']},
        {name:'酪氨酸',abbr:'Tyr',letter:'Y',category:'aromatic',catCN:'芳香族',codons:['TAT','TAC']},
        {name:'终止密码子',abbr:'Stop',letter:'*',category:'stop',catCN:'终止',codons:['TAA','TAG','TGA'],isStop:true},
        {name:'组氨酸',abbr:'His',letter:'H',category:'positive',catCN:'碱性（+）',codons:['CAT','CAC']},
        {name:'谷氨酰胺',abbr:'Gln',letter:'Q',category:'polar',catCN:'极性不带电',codons:['CAA','CAG']},
        {name:'天冬酰胺',abbr:'Asn',letter:'N',category:'polar',catCN:'极性不带电',codons:['AAT','AAC']},
        {name:'赖氨酸',abbr:'Lys',letter:'K',category:'positive',catCN:'碱性（+）',codons:['AAA','AAG']},
        {name:'天冬氨酸',abbr:'Asp',letter:'D',category:'negative',catCN:'酸性（−）',codons:['GAT','GAC']},
        {name:'谷氨酸',abbr:'Glu',letter:'E',category:'negative',catCN:'酸性（−）',codons:['GAA','GAG']},
        {name:'半胱氨酸',abbr:'Cys',letter:'C',category:'special',catCN:'特殊（含硫）',codons:['TGT','TGC']},
        {name:'色氨酸',abbr:'Trp',letter:'W',category:'aromatic',catCN:'芳香族',codons:['TGG']},
        {name:'精氨酸',abbr:'Arg',letter:'R',category:'positive',catCN:'碱性（+）',codons:['CGT','CGC','CGA','CGG','AGA','AGG']},
        {name:'甘氨酸',abbr:'Gly',letter:'G',category:'special',catCN:'特殊（柔性）',codons:['GGT','GGC','GGA','GGG']}
    ];
    const categoryClassMap = {hydrophobic:'aa-hydrophobic',polar:'aa-polar',positive:'aa-positive',negative:'aa-negative',aromatic:'aa-aromatic',special:'aa-special',stop:'stop-chip'};

    const $ = id => document.getElementById(id);
    const dnaInput = $('dnaInput'), charCount = $('charCount'), inputAlert = $('inputAlert'),
          btnTranslate = $('btnTranslateParse'), btnClear = $('btnClear'), btnUpload = $('btnUpload'),
          fileInput = $('fileInput'), textareaWrapper = $('textareaWrapper'), exampleSelect = $('exampleSelect'),
          btnCopyAA = $('btnCopyAA'), readingFrameLabel = $('readingFrameLabel') || {style:{display:'none'}, textContent:''},
          readingFrameGroup = $('readingFrameGroup'),
          strictModeCheckbox = $('strictModeCheckbox'), seqHighlightContainer = $('seqHighlightContainer'),
          ncbiCdsPanel = $('ncbiCdsPanel'), ncbiCdsSummary = $('ncbiCdsSummary'),
          seqHighlightRow = $('seqHighlightRow'), opsCard = $('opsCard'), opsType = $('opsType'),
          opsPosStart = $('opsPosStart'), opsPosEnd = $('opsPosEnd'), opsPosEndGroup = $('opsPosEndGroup'),
          opsSeqGroup = $('opsSeqGroup'), opsInsertSeq = $('opsInsertSeq'), opsPosLabel = $('opsPosLabel'),
          opsAlert = $('opsAlert'), opsResultMini = $('opsResultMini'), btnApplyOps = $('btnApplyOps'),
          btnResetOps = $('btnResetOps'), compareCard = $('compareCard'), origAaChipsRow = $('origAaChipsRow'),
          origStatsRow = $('origStatsRow'), modAaChipsRow = $('modAaChipsRow'), modStatsRow = $('modStatsRow'),
          origNoResult = $('origNoResult'), modNoResult = $('modNoResult'), compareAlert = $('compareAlert'),
          resultCard = $('resultCard'), detailTableBody = $('detailTableBody'), resultAlert = $('resultAlert'),
          toggleCodonTable = $('toggleCodonTable'), codonTableContent = $('codonTableContent'),
          codonRefGrid = $('codonRefGrid'), codonRefTable = $('codonRefTable'), toast = $('toast'), aaModalOverlay = $('aaModalOverlay'),
          modalBodyContent = $('modalBodyContent'), modalCloseBtn = $('modalCloseBtn');

    let currentOffset = 0, isStrictMode = true, originalCleanedSeq = '', currentCleanedSeq = '',
        originalTranslation = null, currentTranslation = null, hasModification = false, isCodonGridView = true,
        currentNcbiCdsEntries = [], currentNcbiCdsIndex = 0, currentGeneInfo = null;

    function buildCodonRefViews() {
        codonRefGrid.innerHTML = '';
        codonRefTable.innerHTML = '';
        aaGroups.forEach(g => {
            const card = document.createElement('div'); card.className = 'codon-ref-card';
            const header = document.createElement('div'); header.className = 'aa-header';
            const letterSpan = document.createElement('span');
            letterSpan.className = `aa-letter ${categoryClassMap[g.category]||''}`;
            if (g.category === 'stop') letterSpan.classList.add('stop-letter');
            letterSpan.textContent = g.letter;
            const nameSpan = document.createElement('span'); nameSpan.className = 'aa-name';
            if (g.category === 'stop') nameSpan.classList.add('stop-name');
            nameSpan.textContent = g.name;
            header.appendChild(letterSpan); header.appendChild(nameSpan);
            const codonsDiv = document.createElement('div'); codonsDiv.className = 'codons-list'; codonsDiv.textContent = g.codons.join(' ');
            card.appendChild(header); card.appendChild(codonsDiv);
            card.addEventListener('click', () => openAAModal(g.letter));
            codonRefGrid.appendChild(card);
        });

        const bases = ['T','C','A','G'];
        const table = document.createElement('table');
        table.className = 'codon-ref-table codon-textbook-table';

        const thead = document.createElement('thead');
        const headRow = document.createElement('tr');
        headRow.appendChild(document.createElement('th'));
        bases.forEach(b2 => {
            const th = document.createElement('th'); th.textContent = b2; headRow.appendChild(th);
        });
        thead.appendChild(headRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        bases.forEach(b1 => {
            const tr = document.createElement('tr');
            const rowHeader = document.createElement('th'); rowHeader.textContent = b1; tr.appendChild(rowHeader);
            bases.forEach(b2 => {
                const td = document.createElement('td'); td.className = 'codon-textbook-cell';
                const codonList = document.createElement('div'); codonList.className = 'codon-cell-list';
                bases.forEach(b3 => {
                    const codon = b1 + b2 + b3;
                    const info = codonTable[codon];
                    const rowDiv = document.createElement('div'); rowDiv.className = 'codon-cell-row';
                    const codonSpan = document.createElement('span'); codonSpan.className = 'codon-cell-codon'; codonSpan.textContent = codon;
                    const aaSpan = document.createElement('span'); aaSpan.className = 'codon-cell-aa';
                    aaSpan.textContent = info ? info.fullName : '未知';
                    rowDiv.appendChild(codonSpan);
                    rowDiv.appendChild(aaSpan);
                    rowDiv.addEventListener('click', () => openAAModal(info?.oneLetter || '*'));
                    codonList.appendChild(rowDiv);
                });
                td.appendChild(codonList);
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        codonRefTable.appendChild(table);
        updateCodonRefView();
    }

    // --- Examples content ---
    const exampleAnpSeq = 'ATGAGCTCCTTCTCCACCACCACCGTGAGCTTCCTCCTTTTACTGGCATTCCAGCTCCTAGGTCAGACCAGAGCTAATCCCATGTACAATGCCGTGTCCAACGCAGACCTGATGGATTTCAAGAATTTGCTGGACCATTTGGAAGAAAAGATGCCTTTAGAAGATGAGGTCGTGCCCCCACAAGTGCTCAGTGAGCCGAATGAAGAAGCGGGGGCTGCTCTCAGCCCCCTCCCTGAGGTGCCTCCCTGGACCGGGGAAGTCAGCCCAGCCCAGAGAGATGGAGGTGCCCTCGGGCGGGGCCCCTGGGACTCCTCTGATCGATCTGCCCTCCTAAAAAGCAAGCTGAGGGCGCTGCTCACTGCCCCTCGGAGCCTGCGGAGATCCAGCTGCTTCGGGGGCAGGATGGACAGGATTGGAGCCCAGAGCGGACTGGGCTGTAACAGCTTCCGGTACTGA';
        // Embedded GenBank example: the actual attached GenBank (sequence.gb)
        const exampleGbContent = `LOCUS       NC_000017              17531 bp    DNA     linear   CON 06-AUG-2025
DEFINITION  Homo sapiens chromosome 17, GRCh38.p14 Primary Assembly.
ACCESSION   NC_000017 REGION: complement(50184101..50201631)
VERSION     NC_000017.11
DBLINK      BioProject: PRJNA168
            Assembly: GCF_000001405.40
KEYWORDS    RefSeq.
SOURCE      Homo sapiens (human)
  ORGANISM  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
REFERENCE   1  (bases 1 to 17531)
  AUTHORS   Gregory,S.G., Barlow,K.F., McLay,K.E., Kaul,R., Swarbreck,D.,
            Dunham,A., Scott,C.E., Howe,K.L., Woodfine,K., Spencer,C.C.,
            Jones,M.C., Gillson,C., Searle,S., Zhou,Y., Kokocinski,F.,
            McDonald,L., Evans,R., Phillips,K., Atkinson,A., Cooper,R.,
            Jones,C., Hall,R.E., Andrews,T.D., Lloyd,C., Ainscough,R.,
            Almeida,J.P., Ambrose,K.D., Anderson,F., Andrew,R.W., Ashwell,R.I.,
            Aubin,K., Babbage,A.K., Bagguley,C.L., Bailey,J., Beasley,H.,
            Bethel,G., Bird,C.P., Bray-Allen,S., Brown,J.Y., Brown,A.J.,
            Buckley,D., Burton,J., Bye,J., Carder,C., Chapman,J.C., Clark,S.Y.,
            Clarke,G., Clee,C., Cobley,V., Collier,R.E., Corby,N.,
            Coville,G.J., Davies,J., Deadman,R., Dunn,M., Earthrowl,M.,
            Ellington,A.G., Errington,H., Frankish,A., Frankland,J., French,L.,
            Garner,P., Garnett,J., Gay,L., Ghori,M.R., Gibson,R., Gilby,L.M.,
            Gillett,W., Glithero,R.J., Grafham,D.V., Griffiths,C.,
            Griffiths-Jones,S., Grocock,R., Hammond,S., Harrison,E.S., Hart,E.,
            Haugen,E., Heath,P.D., Holmes,S., Holt,K., Howden,P.J., Hunt,A.R.,
            Hunt,S.E., Hunter,G., Isherwood,J., James,R., Johnson,C.,
            Johnson,D., Joy,A., Kay,M., Kershaw,J.K., Kibukawa,M.,
            Kimberley,A.M., King,A., Knights,A.J., Lad,H., Laird,G., Lawlor,S.,
            Leongamornlert,D.A., Lloyd,D.M., Loveland,J., Lovell,J., Lush,M.J.,
            Lyne,R., Martin,S., Mashreghi-Mohammadi,M., Matthews,L.,
            Matthews,N.S., McLaren,S., Milne,S., Mistry,S., Moore,M.J.,
            Nickerson,T., O'Dell,C.N., Oliver,K., Palmeiri,A., Palmer,S.A.,
            Parker,A., Patel,D., Pearce,A.V., Peck,A.I., Pelan,S., Phelps,K.,
            Phillimore,B.J., Plumb,R., Rajan,J., Raymond,C., Rouse,G.,
            Saenphimmachak,C., Sehra,H.K., Sheridan,E., Shownkeen,R., Sims,S.,
            Skuce,C.D., Smith,M., Steward,C., Subramanian,S., Sycamore,N.,
            Tracey,A., Tromans,A., Van Helmond,Z., Wall,M., Wallis,J.M.,
            White,S., Whitehead,S.L., Wilkinson,J.E., Willey,D.L., Williams,H.,
            Wilming,L., Wray,P.W., Wu,Z., Coulson,A., Vaudin,M., Sulston,J.E.,
            Durbin,R., Hubbard,T., Wooster,R., Dunham,I., Carter,N.P.,
            McVean,G., Ross,M.T., Harrow,J., Olson,M.V., Beck,S., Rogers,J.,
            Bentley,D.R., Banerjee,R., Bryant,S.P., Burford,D.C., Burrill,W.D.,
            Clegg,S.M., Dhami,P., Dovey,O., Faulkner,L.M., Gribble,S.M.,
            Langford,C.F., Pandian,R.D., Porter,K.M. and Prigmore,E.
  TITLE     The DNA sequence and biological annotation of human chromosome 1
  JOURNAL   Nature 441 (7091), 315-321 (2006)
   PUBMED   16710414
  REMARK    Erratum:[Nature. 2006 Oct 26;443(7114):1013. Banerjee, R [added];
            Bryant, SP [added]; Burford, DC [added]; Burrill, WDH [added];
            Clegg, SM [added]; Dhami, P [added]; Dovey, O [added]; Faulkner, LM
            [added]; Gribble, SM [added]; Langford, CF [added]; Pandian, RD
            [added]; Porter, KM [added]; Prigmore, E [added]]
REFERENCE   2  (bases 1 to 17531)
  AUTHORS   Zody,M.C., Garber,M., Adams,D.J., Sharpe,T., Harrow,J.,
            Lupski,J.R., Nicholson,C., Searle,S.M., Wilming,L., Young,S.K.,
            Abouelleil,A., Allen,N.R., Bi,W., Bloom,T., Borowsky,M.L.,
            Bugalter,B.E., Butler,J., Chang,J.L., Chen,C.K., Cook,A., Corum,B.,
            Cuomo,C.A., de Jong,P.J., DeCaprio,D., Dewar,K., FitzGerald,M.,
            Gilbert,J., Gibson,R., Gnerre,S., Goldstein,S., Grafham,D.V.,
            Grocock,R., Hafez,N., Hagopian,D.S., Hart,E., Norman,C.H.,
            Humphray,S., Jaffe,D.B., Jones,M., Kamal,M., Khodiyar,V.K.,
            LaButti,K., Laird,G., Lehoczky,J., Liu,X., Lokyitsang,T.,
            Loveland,J., Lui,A., Macdonald,P., Major,J.E., Matthews,L.,
            Mauceli,E., McCarroll,S.A., Mihalev,A.H., Mudge,J., Nguyen,C.,
            Nicol,R., O'Leary,S.B., Osoegawa,K., Schwartz,D.C., Shaw-Smith,C.,
            Stankiewicz,P., Steward,C., Swarbreck,D., Venkataraman,V.,
            Whittaker,C.A., Yang,X., Zimmer,A.R., Bradley,A., Hubbard,T.,
            Birren,B.W., Rogers,J., Lander,E.S. and Nusbaum,C.
  TITLE     DNA sequence of human chromosome 17 and analysis of rearrangement
            in the human lineage
  JOURNAL   Nature 440 (7087), 1045-1049 (2006)
   PUBMED   16625196
REFERENCE   3  (bases 1 to 17531)
  CONSRTM   International Human Genome Sequencing Consortium
  TITLE     Finishing the euchromatic sequence of the human genome
  JOURNAL   Nature 431 (7011), 931-945 (2004)
   PUBMED   15496913
REFERENCE   4  (bases 1 to 17531)
  AUTHORS   Lander,E.S., Linton,L.M., Birren,B., Nusbaum,C., Zody,M.C.,
            Baldwin,J., Devon,K., Dewar,K., Doyle,M., FitzHugh,W., Funke,R.,
            Gage,D., Harris,K., Heaford,A., Howland,J., Kann,L., Lehoczky,J.,
            LeVine,R., McEwan,P., McKernan,K., Meldrim,J., Mesirov,J.P.,
            Miranda,C., Morris,W., Naylor,J., Raymond,C., Rosetti,M.,
            Santos,R., Sheridan,A., Sougnez,C., Stange-Thomann,N.,
            Stojanovic,N., Subramanian,A., Wyman,D., Rogers,J., Sulston,J.,
            Ainscough,R., Beck,S., Bentley,D., Burton,J., Clee,C., Carter,N.,
            Coulson,A., Deadman,R., Deloukas,P., Dunham,A., Dunham,I.,
            Durbin,R., French,L., Grafham,D., Gregory,S., Hubbard,T.,
            Humphray,S., Hunt,A., Jones,M., Lloyd,C., McMurray,A., Matthews,L.,
            Mercer,S., Milne,S., Mullikin,J.C., Mungall,A., Plumb,R., Ross,M.,
            Shownkeen,R., Sims,S., Waterston,R.H., Wilson,R.K., Hillier,L.W.,
            McPherson,J.D., Marra,M.A., Mardis,E.R., Fulton,L.A.,
            Chinwalla,A.T., Pepin,K.H., Gish,W.R., Chissoe,S.L., Wendl,M.C.,
            Delehaunty,K.D., Miner,T.L., Delehaunty,A., Kramer,J.B., Cook,L.L.,
            Fulton,R.S., Johnson,D.L., Minx,P.J., Clifton,S.W., Hawkins,T.,
            Branscomb,E., Predki,P., Richardson,P., Wenning,S., Slezak,T.,
            Doggett,N., Cheng,J.F., Olsen,A., Lucas,S., Elkin,C.,
            Uberbacher,E., Frazier,M., Gibbs,R.A., Muzny,D.M., Scherer,S.E.,
            Bouck,J.B., Sodergren,E.J., Worley,K.C., Rives,C.M., Gorrell,J.H.,
            Metzker,M.L., Naylor,S.L., Kucherlapati,R.S., Nelson,D.L.,
            Weinstock,G.M., Sakaki,Y., Fujiyama,A., Hattori,M., Yada,T.,
            Toyoda,A., Itoh,T., Kawagoe,C., Watanabe,H., Totoki,Y., Taylor,T.,
            Weissenbach,J., Heilig,R., Saurin,W., Artiguenave,F., Brottier,P.,
            Bruls,T., Pelletier,E., Robert,C., Wincker,P., Smith,D.R.,
            Doucette-Stamm,L., Rubenfield,M., Weinstock,K., Lee,H.M.,
            Dubois,J., Rosenthal,A., Platzer,M., Nyakatura,G., Taudien,S.,
            Rump,A., Yang,H., Yu,J., Wang,J., Huang,G., Gu,J., Hood,L.,
            Rowen,L., Madan,A., Qin,S., Davis,R.W., Federspiel,N.A.,
            Abola,A.P., Proctor,M.J., Myers,R.M., Schmutz,J., Dickson,M.,
            Grimwood,J., Cox,D.R., Olson,M.V., Kaul,R., Raymond,C., Shimizu,N.,
            Kawasaki,K., Minoshima,S., Evans,G.A., Athanasiou,M., Schultz,R.,
            Roe,B.A., Chen,F., Pan,H., Ramser,J., Lehrach,H., Reinhardt,R.,
            McCombie,W.R., de la Bastide,M., Dedhia,N., Blocker,H.,
            Hornischer,K., Nordsiek,G., Agarwala,R., Aravind,L., Bailey,J.A.,
            Bateman,A., Batzoglou,S., Birney,E., Bork,P., Brown,D.G.,
            Burge,C.B., Cerutti,L., Chen,H.C., Church,D., Clamp,M.,
            Copley,R.R., Doerks,T., Eddy,S.R., Eichler,E.E., Furey,T.S.,
            Galagan,J., Gilbert,J.G., Harmon,C., Hayashizaki,Y., Haussler,D.,
            Hermjakob,H., Hokamp,K., Jang,W., Johnson,L.S., Jones,T.A.,
            Kasif,S., Kaspryzk,A., Kennedy,S., Kent,W.J., Kitts,P.,
            Koonin,E.V., Korf,I., Kulp,D., Lancet,D., Lowe,T.M., McLysaght,A.,
            Mikkelsen,T., Moran,J.V., Mulder,N., Pollara,V.J., Ponting,C.P.,
            Schuler,G., Schultz,J., Slater,G., Smit,A.F., Stupka,E.,
            Szustakowski,J., Thierry-Mieg,D., Thierry-Mieg,J., Wagner,L.,
            Wallis,J., Wheeler,R., Williams,A., Wolf,Y.I., Wolfe,K.H.,
            Yang,S.P., Yeh,R.F., Collins,F., Guyer,M.S., Peterson,J.,
            Felsenfeld,A., Wetterstrand,K.A., Patrinos,A., Morgan,M.J., de
            Jong,P., Catanese,J.J., Osoegawa,K., Shizuya,H., Choi,S. and
            Chen,Y.J.
  CONSRTM   International Human Genome Sequencing Consortium
  TITLE     Initial sequencing and analysis of the human genome
  JOURNAL   Nature 409 (6822), 860-921 (2001)
   PUBMED   11237011
  REMARK    Erratum:[Nature 2001 Aug 2;412(6846):565]
COMMENT     REFSEQ INFORMATION: The reference sequence is identical to
            CM000679.2.
            
            On Feb 3, 2014 this sequence version replaced NC_000017.10.
            Assembly Name: GRCh38.p14 Primary Assembly
            The DNA sequence is composed of genomic sequence, primarily
            finished clones that were sequenced as part of the Human Genome
            Project. PCR products and WGS shotgun sequence have been added
            where necessary to fill gaps or correct errors. All such additions
            are manually curated by GRC staff. For more information see:
            https://genomereference.org.
            
            ##Genome-Annotation-Data-START##
            Annotation Provider         :: NCBI RefSeq
            Annotation Status           :: Updated annotation
            Annotation Name             :: GCF_000001405.40-RS_2025_08
            Annotation Pipeline         :: NCBI eukaryotic genome annotation
                                           pipeline
            Annotation Software Version :: 10.4
            Annotation Method           :: Best-placed RefSeq; Gnomon;
                                           RefSeqFE; cmsearch; tRNAscan-SE
            Features Annotated          :: Gene; mRNA; CDS; ncRNA
            Annotation Date             :: 08/01/2025
            ##Genome-Annotation-Data-END##
FEATURES             Location/Qualifiers
     source          1..17531
                     /organism="Homo sapiens"
                     /mol_type="genomic DNA"
                     /db_xref="taxon:9606"
                     /chromosome="17"
     gene            1..17531
                     /gene="COL1A1"
                     /gene_synonym="CAFYD; EDSARTH1; EDSC; OI1; OI2; OI3; OI4"
                     /note="collagen type I alpha 1 chain; Derived by automated
                     computational analysis using gene prediction method:
                     BestRefSeq,Gnomon."
                     /db_xref="GeneID:1277"
                     /db_xref="HGNC:HGNC:2197"
                     /db_xref="MIM:120150"
     mRNA            join(1..221,1685..1879,2042..2076,2179..2214,2305..2406,
                     3128..3199,3427..3471,3630..3683,3847..3900,4399..4452,
                     4569..4622,4962..5015,5104..5148,5265..5318,8939..8992,
                     9104..9157,9608..9652,9746..9844,10142..10249,
                     10708..10815,11036..11089,11252..11305,11524..11631,
                     11720..11773,11900..11953,12094..12255,12357..12464,
                     12622..12729,12837..12890,12995..13102,13483..13536,
                     13649..13756,14095..14148,14510..14617,14710..14992,
                     15125..15315,15612..15854,15984..17531)
                     /gene="COL1A1"
                     /gene_synonym="CAFYD; EDSARTH1; EDSC; OI1; OI2; OI3; OI4"
                     /product="collagen type I alpha 1 chain, transcript
                     variant X3"
                     /note="Derived by automated computational analysis using
                     gene prediction method: Gnomon. Supporting evidence
                     includes similarity to: 2 mRNAs, 797 ESTs, 1771 long SRA
                     reads, 15 Proteins, and 100% coverage of the annotated
                     genomic feature by RNAseq alignments, including 119
                     samples with support for all annotated introns"
                     /transcript_id="XM_005257059.5"
                     /db_xref="GeneID:1277"
                     /db_xref="HGNC:HGNC:2197"
                     /db_xref="MIM:120150"
     mRNA            join(1..221,1685..1879,2042..2076,2179..2214,2305..2406,
                     3128..3199,3427..3471,3630..3683,3847..3900,4399..4452,
                     4569..4622,4962..5015,5104..5148,5265..5318,6154..6198,
                     6302..6400,6532..6585,6804..6911,7006..7059,7185..7283,
                     7449..7502,7591..7689,8585..8638,8782..8835,8939..8992,
                     9104..9157,9608..9652,9746..9844,10142..10249,
                     10708..10815,11036..11089,11252..11305,11524..11631,
                     11720..11773,11900..11953,12094..12255,12357..12464,
                     12622..12729,12837..12890,12995..13102,13483..13536,
                     13649..13756,14095..14148,14510..14617,14710..14992,
                     15125..15315,15612..15854,15984..17531)
                     /gene="COL1A1"
                     /gene_synonym="CAFYD; EDSARTH1; EDSC; OI1; OI2; OI3; OI4"
                     /product="collagen type I alpha 1 chain, transcript
                     variant X1"
                     /note="Derived by automated computational analysis using
                     gene prediction method: Gnomon. Supporting evidence
                     includes similarity to: 3 mRNAs, 940 ESTs, 2522 long SRA
                     reads, 16 Proteins, and 100% coverage of the annotated
                     genomic feature by RNAseq alignments, including 85 samples
                     with support for all annotated introns"
                     /transcript_id="XM_011524341.2"
                     /db_xref="GeneID:1277"
                     /db_xref="HGNC:HGNC:2197"
                     /db_xref="MIM:120150"
     mRNA            join(1..221,1685..1879,2042..2076,2179..2214,2305..2406,
                     3128..3199,3427..3471,3630..3683,3847..3900,4399..4452,
                     4569..4622,4962..5015,5104..5148,5265..5318,5433..5477,
                     5656..5709,5967..6065,6154..6198,6302..6400,6532..6585,
                     6804..6911,7006..7059,7185..7283,7449..7502,7591..7689,
                     8585..8638,8782..8835,8939..8992,9104..9157,9608..9652,
                     9746..9844,10142..10249,10708..10815,11036..11089,
                     11252..11305,11524..11631,11720..11773,11900..11953,
                     12622..12729,12837..12890,12995..13102,13483..13536,
                     13649..13756,14095..14148,14510..14617,14710..14992,
                     15125..15315,15612..15854,15984..17531)
                     /gene="COL1A1"
                     /gene_synonym="CAFYD; EDSARTH1; EDSC; OI1; OI2; OI3; OI4"
                     /product="collagen type I alpha 1 chain, transcript
                     variant X2"
                     /note="Derived by automated computational analysis using
                     gene prediction method: Gnomon. Supporting evidence
                     includes similarity to: 5 mRNAs, 943 ESTs, 1174 long SRA
                     reads, 15 Proteins, and 100% coverage of the annotated
                     genomic feature by RNAseq alignments, including 119
                     samples with support for all annotated introns"
                     /transcript_id="XM_005257058.5"
                     /db_xref="GeneID:1277"
                     /db_xref="HGNC:HGNC:2197"
                     /db_xref="MIM:120150"
     mRNA            join(1..221,1685..1879,2042..2076,2179..2214,2305..2406,
                     3128..3199,3427..3471,3630..3683,3847..3900,4399..4452,
                     4569..4622,4962..5015,5104..5148,5265..5318,5433..5477,
                     5656..5709,5967..6065,6154..6198,6302..6400,6532..6585,
                     6804..6911,7006..7059,7185..7283,7449..7502,7591..7689,
                     8585..8638,8782..8835,8939..8992,9104..9157,9608..9652,
                     9746..9844,10142..10249,10708..10815,11036..11089,
                     11252..11305,11524..11631,11720..11773,11900..11953,
                     12094..12255,12357..12464,12622..12729,12837..12890,
                     12995..13102,13483..13536,13649..13756,14095..14148,
                     14510..14617,14710..14992,15125..15315,15612..15854,
                     15984..17531)
                     /gene="COL1A1"
                     /gene_synonym="CAFYD; EDSARTH1; EDSC; OI1; OI2; OI3; OI4"
                     /product="collagen type I alpha 1 chain"
                     /note="Derived by automated computational analysis using
                     gene prediction method: BestRefSeq."
                     /transcript_id="NM_000088.4"
                     /db_xref="Ensembl:ENST00000225964.10"
                     /db_xref="GeneID:1277"
                     /db_xref="HGNC:HGNC:2197"
                     /db_xref="MIM:120150"
     CDS             join(119..221,1685..1879,2042..2076,2179..2214,2305..2406,
                     3128..3199,3427..3471,3630..3683,3847..3900,4399..4452,
                     4569..4622,4962..5015,5104..5148,5265..5318,8939..8992,
                     9104..9157,9608..9652,9746..9844,10142..10249,
                     10708..10815,11036..11089,11252..11305,11524..11631,
                     11720..11773,11900..11953,12094..12255,12357..12464,
                     12622..12729,12837..12890,12995..13102,13483..13536,
                     13649..13756,14095..14148,14510..14617,14710..14992,
                     15125..15315,15612..15854,15984..16130)
                     /gene="COL1A1"
                     /gene_synonym="CAFYD; EDSARTH1; EDSC; OI1; OI2; OI3; OI4"
                     /note="Derived by automated computational analysis using
                     gene prediction method: Gnomon."
                     /codon_start=1
                     /product="collagen alpha-1(I) chain isoform X3"
                     /protein_id="XP_005257116.2"
                     /db_xref="GeneID:1277"
                     /db_xref="HGNC:HGNC:2197"
                     /db_xref="MIM:120150"
                     /translation="MFSFVDLRLLLLLAATALLTHGQEEGQVEGQDEDIPPITCVQNG
                     LRYHDRDVWKPEPCRICVCDNGKVLCDDVICDETKNCPGAEVPEGECCPVCPDGSESP
                     TDQETTGVEGPKGDTGPRGPRGPAGPPGRDGIPGQPGLPGPPGPPGPPGPPGLGGNFA
                     PQLSYGYDEKSTGGISVPGPMGPSGPRGLPGPPGAPGPQGFQGPPGEPGEPGASGPMG
                     PRGPPGPPGKNGDDGEAGKPGRPGERGPPGPQGARGLPGTAGLPGMKGHRGFSGLDGA
                     KGDAGPAGPKGEPGSPGENGAPGQMGPRGLPGERGRPGAPGPAGPAGERGEQGPAGSP
                     GFQGLPGPAGPPGEAGKPGEQGVPGDLGAPGPSGARGERGFPGERGVQGPPGPAGPRG
                     ANGAPGNDGAKGDAGAPGAPGSQGAPGLQGMPGERGAAGLPGPKGDRGDAGPKGADGS
                     PGKDGVRGLTGPIGPPGPAGAPGDKGESGPSGPAGPTGARGAPGDRGEPGPPGPAGFA
                     GPPGADGQPGAKGEPGDAGAKGDAGPPGPAGPAGPPGPIGNVGAPGAKGARGSAGPPG
                     ATGFPGAAGRVGPPGPSGNAGPPGPPGPAGKEGGKGPRGETGPAGRPGEVGPPGPPGP
                     AGEKGSPGADGPAGAPGTPGPQGIAGQRGVVGLPGQRGERGFPGLPGPSGEPGKQGPS
                     GASGERGPPGPMGPPGLAGPPGESGREGAPGAEGSPGRDGSPGAKGDRGETGPAGPPG
                     APGAPGAPGPVGPAGKSGDRGETGPAGPAGPVGPVGARGPAGPQGPRGDKGETGEQGD
                     RGIKGHRGFSGLQGPPGPPGSPGEQGPSGASGPAGPRGPPGSAGAPGKDGLNGLPGPI
                     GPPGPRGRTGDAGPVGPPGPPGPPGPPGPPSAGFDFSFLPQPPQEKAHDGGRYYRADD
                     ANVVRDRDLEVDTTLKSLSQQIENIRSPEGSRKNPARTCRDLKMCHSDWKSGEYWIDP
                     NQGCNLDAIKVFCNMETGETCVYPTQPSVAQKNWYISKNPKDKRHVWFGESMTDGFQF
                     EYGGQGSDPADVAIQLTFLRLMSTEASQNITYHCKNSVAYMDQQTGNLKKALLLQGSN
                     EIEIRAEGNSRFTYSVTVDGCTSHTGAWGKTVIEYKTTKTSRLPIIDVAPLDVGAPDQ
                     EFGFDVGPVCFL"
     CDS             join(119..221,1685..1879,2042..2076,2179..2214,2305..2406,
                     3128..3199,3427..3471,3630..3683,3847..3900,4399..4452,
                     4569..4622,4962..5015,5104..5148,5265..5318,6154..6198,
                     6302..6400,6532..6585,6804..6911,7006..7059,7185..7283,
                     7449..7502,7591..7689,8585..8638,8782..8835,8939..8992,
                     9104..9157,9608..9652,9746..9844,10142..10249,
                     10708..10815,11036..11089,11252..11305,11524..11631,
                     11720..11773,11900..11953,12094..12255,12357..12464,
                     12622..12729,12837..12890,12995..13102,13483..13536,
                     13649..13756,14095..14148,14510..14617,14710..14992,
                     15125..15315,15612..15854,15984..16130)
                     /gene="COL1A1"
                     /gene_synonym="CAFYD; EDSARTH1; EDSC; OI1; OI2; OI3; OI4"
                     /note="Derived by automated computational analysis using
                     gene prediction method: Gnomon."
                     /codon_start=1
                     /product="collagen alpha-1(I) chain isoform X1"
                     /protein_id="XP_011522643.1"
                     /db_xref="GeneID:1277"
                     /db_xref="HGNC:HGNC:2197"
                     /db_xref="MIM:120150"
                     /translation="MFSFVDLRLLLLLAATALLTHGQEEGQVEGQDEDIPPITCVQNG
                     LRYHDRDVWKPEPCRICVCDNGKVLCDDVICDETKNCPGAEVPEGECCPVCPDGSESP
                     TDQETTGVEGPKGDTGPRGPRGPAGPPGRDGIPGQPGLPGPPGPPGPPGPPGLGGNFA
                     PQLSYGYDEKSTGGISVPGPMGPSGPRGLPGPPGAPGPQGFQGPPGEPGEPGASGPMG
                     PRGPPGPPGKNGDDGEAGKPGRPGERGPPGPQGARGLPGTAGLPGMKGHRGFSGLDGA
                     KGDAGPAGPKGEPGSPGENGAPGQMGPRGLPGERGRPGAPGPAGNPGADGQPGAKGAN
                     GAPGIAGAPGFPGARGPSGPQGPGGPPGPKGNSGEPGAPGSKGDTGAKGEPGPVGVQG
                     PPGPAGEEGKRGARGEPGPTGLPGPPGERGGPGSRGFPGADGVAGPKGPAGERGSPGP
                     AGPKGSPGEAGRPGEAGLPGAKGLTGSPGSPGPDGKTGPPGPAGQDGRPGPPGPPGAR
                     GQAGVMGFPGPKGAAGEPGKAGERGVPGPPGAVGPAGKDGEAGAQGPPGPAGPAGERG
                     EQGPAGSPGFQGLPGPAGPPGEAGKPGEQGVPGDLGAPGPSGARGERGFPGERGVQGP
                     PGPAGPRGANGAPGNDGAKGDAGAPGAPGSQGAPGLQGMPGERGAAGLPGPKGDRGDA
                     GPKGADGSPGKDGVRGLTGPIGPPGPAGAPGDKGESGPSGPAGPTGARGAPGDRGEPG
                     PPGPAGFAGPPGADGQPGAKGEPGDAGAKGDAGPPGPAGPAGPPGPIGNVGAPGAKGA
                     RGSAGPPGATGFPGAAGRVGPPGPSGNAGPPGPPGPAGKEGGKGPRGETGPAGRPGEV
                     GPPGPPGPAGEKGSPGADGPAGAPGTPGPQGIAGQRGVVGLPGQRGERGFPGLPGPSG
                     EPGKQGPSGASGERGPPGPMGPPGLAGPPGESGREGAPGAEGSPGRDGSPGAKGDRGE
                     TGPAGPPGAPGAPGAPGPVGPAGKSGDRGETGPAGPAGPVGPVGARGPAGPQGPRGDK
                     GETGEQGDRGIKGHRGFSGLQGPPGPPGSPGEQGPSGASGPAGPRGPPGSAGAPGKDG
                     LNGLPGPIGPPGPRGRTGDAGPVGPPGPPGPPGPPGPPSAGFDFSFLPQPPQEKAHDG
                     GRYYRADDANVVRDRDLEVDTTLKSLSQQIENIRSPEGSRKNPARTCRDLKMCHSDWK
                     SGEYWIDPNQGCNLDAIKVFCNMETGETCVYPTQPSVAQKNWYISKNPKDKRHVWFGE
                     SMTDGFQFEYGGQGSDPADVAIQLTFLRLMSTEASQNITYHCKNSVAYMDQQTGNLKK
                     ALLLQGSNEIEIRAEGNSRFTYSVTVDGCTSHTGAWGKTVIEYKTTKTSRLPIIDVAP
                     LDVGAPDQEFGFDVGPVCFL"
     CDS             join(119..221,1685..1879,2042..2076,2179..2214,2305..2406,
                     3128..3199,3427..3471,3630..3683,3847..3900,4399..4452,
                     4569..4622,4962..5015,5104..5148,5265..5318,5433..5477,
                     5656..5709,5967..6065,6154..6198,6302..6400,6532..6585,
                     6804..6911,7006..7059,7185..7283,7449..7502,7591..7689,
                     8585..8638,8782..8835,8939..8992,9104..9157,9608..9652,
                     9746..9844,10142..10249,10708..10815,11036..11089,
                     11252..11305,11524..11631,11720..11773,11900..11953,
                     12622..12729,12837..12890,12995..13102,13483..13536,
                     13649..13756,14095..14148,14510..14617,14710..14992,
                     15125..15315,15612..15854,15984..16130)
                     /gene="COL1A1"
                     /gene_synonym="CAFYD; EDSARTH1; EDSC; OI1; OI2; OI3; OI4"
                     /note="Derived by automated computational analysis using
                     gene prediction method: Gnomon."
                     /codon_start=1
                     /product="collagen alpha-1(I) chain isoform X2"
                     /protein_id="XP_005257115.2"
                     /db_xref="GeneID:1277"
                     /db_xref="HGNC:HGNC:2197"
                     /db_xref="MIM:120150"
                     /translation="MFSFVDLRLLLLLAATALLTHGQEEGQVEGQDEDIPPITCVQNG
                     LRYHDRDVWKPEPCRICVCDNGKVLCDDVICDETKNCPGAEVPEGECCPVCPDGSESP
                     TDQETTGVEGPKGDTGPRGPRGPAGPPGRDGIPGQPGLPGPPGPPGPPGPPGLGGNFA
                     PQLSYGYDEKSTGGISVPGPMGPSGPRGLPGPPGAPGPQGFQGPPGEPGEPGASGPMG
                     PRGPPGPPGKNGDDGEAGKPGRPGERGPPGPQGARGLPGTAGLPGMKGHRGFSGLDGA
                     KGDAGPAGPKGEPGSPGENGAPGQMGPRGLPGERGRPGAPGPAGARGNDGATGAAGPP
                     GPTGPAGPPGFPGAVGAKGEAGPQGPRGSEGPQGVRGEPGPPGPAGAAGPAGNPGADG
                     QPGAKGANGAPGIAGAPGFPGARGPSGPQGPGGPPGPKGNSGEPGAPGSKGDTGAKGE
                     PGPVGVQGPPGPAGEEGKRGARGEPGPTGLPGPPGERGGPGSRGFPGADGVAGPKGPA
                     GERGSPGPAGPKGSPGEAGRPGEAGLPGAKGLTGSPGSPGPDGKTGPPGPAGQDGRPG
                     PPGPPGARGQAGVMGFPGPKGAAGEPGKAGERGVPGPPGAVGPAGKDGEAGAQGPPGP
                     AGPAGERGEQGPAGSPGFQGLPGPAGPPGEAGKPGEQGVPGDLGAPGPSGARGERGFP
                     GERGVQGPPGPAGPRGANGAPGNDGAKGDAGAPGAPGSQGAPGLQGMPGERGAAGLPG
                     PKGDRGDAGPKGADGSPGKDGVRGLTGPIGPPGPAGAPGDKGESGPSGPAGPTGARGA
                     PGDRGEPGPPGPAGFAGPPGADGQPGAKGEPGDAGAKGDAGPPGPAGPAGPPGPIGNV
                     GAPGAKGARGSAGPPGATGFPGAAGRVGPPGPSGEPGKQGPSGASGERGPPGPMGPPG
                     LAGPPGESGREGAPGAEGSPGRDGSPGAKGDRGETGPAGPPGAPGAPGAPGPVGPAGK
                     SGDRGETGPAGPAGPVGPVGARGPAGPQGPRGDKGETGEQGDRGIKGHRGFSGLQGPP
                     GPPGSPGEQGPSGASGPAGPRGPPGSAGAPGKDGLNGLPGPIGPPGPRGRTGDAGPVG
                     PPGPPGPPGPPGPPSAGFDFSFLPQPPQEKAHDGGRYYRADDANVVRDRDLEVDTTLK
                     SLSQQIENIRSPEGSRKNPARTCRDLKMCHSDWKSGEYWIDPNQGCNLDAIKVFCNME
                     TGETCVYPTQPSVAQKNWYISKNPKDKRHVWFGESMTDGFQFEYGGQGSDPADVAIQL
                     TFLRLMSTEASQNITYHCKNSVAYMDQQTGNLKKALLLQGSNEIEIRAEGNSRFTYSV
                     TVDGCTSHTGAWGKTVIEYKTTKTSRLPIIDVAPLDVGAPDQEFGFDVGPVCFL"
     CDS             join(119..221,1685..1879,2042..2076,2179..2214,2305..2406,
                     3128..3199,3427..3471,3630..3683,3847..3900,4399..4452,
                     4569..4622,4962..5015,5104..5148,5265..5318,5433..5477,
                     5656..5709,5967..6065,6154..6198,6302..6400,6532..6585,
                     6804..6911,7006..7059,7185..7283,7449..7502,7591..7689,
                     8585..8638,8782..8835,8939..8992,9104..9157,9608..9652,
                     9746..9844,10142..10249,10708..10815,11036..11089,
                     11252..11305,11524..11631,11720..11773,11900..11953,
                     12094..12255,12357..12464,12622..12729,12837..12890,
                     12995..13102,13483..13536,13649..13756,14095..14148,
                     14510..14617,14710..14992,15125..15315,15612..15854,
                     15984..16130)
                     /gene="COL1A1"
                     /gene_synonym="CAFYD; EDSARTH1; EDSC; OI1; OI2; OI3; OI4"
                     /note="Derived by automated computational analysis using
                     gene prediction method: BestRefSeq."
                     /codon_start=1
                     /product="collagen alpha-1(I) chain preproprotein"
                     /protein_id="NP_000079.2"
                     /db_xref="CCDS:CCDS11561.1"
                     /db_xref="Ensembl:ENSP00000225964.6"
                     /db_xref="GeneID:1277"
                     /db_xref="HGNC:HGNC:2197"
                     /db_xref="MIM:120150"
                     /translation="MFSFVDLRLLLLLAATALLTHGQEEGQVEGQDEDIPPITCVQNG
                     LRYHDRDVWKPEPCRICVCDNGKVLCDDVICDETKNCPGAEVPEGECCPVCPDGSESP
                     TDQETTGVEGPKGDTGPRGPRGPAGPPGRDGIPGQPGLPGPPGPPGPPGPPGLGGNFA
                     PQLSYGYDEKSTGGISVPGPMGPSGPRGLPGPPGAPGPQGFQGPPGEPGEPGASGPMG
                     PRGPPGPPGKNGDDGEAGKPGRPGERGPPGPQGARGLPGTAGLPGMKGHRGFSGLDGA
                     KGDAGPAGPKGEPGSPGENGAPGQMGPRGLPGERGRPGAPGPAGARGNDGATGAAGPP
                     GPTGPAGPPGFPGAVGAKGEAGPQGPRGSEGPQGVRGEPGPPGPAGAAGPAGNPGADG
                     QPGAKGANGAPGIAGAPGFPGARGPSGPQGPGGPPGPKGNSGEPGAPGSKGDTGAKGE
                     PGPVGVQGPPGPAGEEGKRGARGEPGPTGLPGPPGERGGPGSRGFPGADGVAGPKGPA
                     GERGSPGPAGPKGSPGEAGRPGEAGLPGAKGLTGSPGSPGPDGKTGPPGPAGQDGRPG
                     PPGPPGARGQAGVMGFPGPKGAAGEPGKAGERGVPGPPGAVGPAGKDGEAGAQGPPGP
                     AGPAGERGEQGPAGSPGFQGLPGPAGPPGEAGKPGEQGVPGDLGAPGPSGARGERGFP
                     GERGVQGPPGPAGPRGANGAPGNDGAKGDAGAPGAPGSQGAPGLQGMPGERGAAGLPG
                     PKGDRGDAGPKGADGSPGKDGVRGLTGPIGPPGPAGAPGDKGESGPSGPAGPTGARGA
                     PGDRGEPGPPGPAGFAGPPGADGQPGAKGEPGDAGAKGDAGPPGPAGPAGPPGPIGNV
                     GAPGAKGARGSAGPPGATGFPGAAGRVGPPGPSGNAGPPGPPGPAGKEGGKGPRGETG
                     PAGRPGEVGPPGPPGPAGEKGSPGADGPAGAPGTPGPQGIAGQRGVVGLPGQRGERGF
                     PGLPGPSGEPGKQGPSGASGERGPPGPMGPPGLAGPPGESGREGAPGAEGSPGRDGSP
                     GAKGDRGETGPAGPPGAPGAPGAPGPVGPAGKSGDRGETGPAGPAGPVGPVGARGPAG
                     PQGPRGDKGETGEQGDRGIKGHRGFSGLQGPPGPPGSPGEQGPSGASGPAGPRGPPGS
                     AGAPGKDGLNGLPGPIGPPGPRGRTGDAGPVGPPGPPGPPGPPGPPSAGFDFSFLPQP
                     PQEKAHDGGRYYRADDANVVRDRDLEVDTTLKSLSQQIENIRSPEGSRKNPARTCRDL
                     KMCHSDWKSGEYWIDPNQGCNLDAIKVFCNMETGETCVYPTQPSVAQKNWYISKNPKD
                     KRHVWFGESMTDGFQFEYGGQGSDPADVAIQLTFLRLMSTEASQNITYHCKNSVAYMD
                     QQTGNLKKALLLQGSNEIEIRAEGNSRFTYSVTVDGCTSHTGAWGKTVIEYKTTKTSR
                     LPIIDVAPLDVGAPDQEFGFDVGPVCFL"
ORIGIN      
        1 gcagacggga gtttctcctc ggggtcggag caggaggcac gcggagtgtg aggccacgca
       61 tgagcggacg ctaaccccct ccccagccac aaagagtcta catgtctagg gtctagacat
      121 gttcagcttt gtggacctcc ggctcctgct cctcttagcg gccaccgccc tcctgacgca
      181 cggccaagag gaaggccaag tcgagggcca agacgaagac agtaagtccc aaacttttgg
      241 gagtgcaagg atactctata tcgcgccttg cgcttggtcc cgggggccgc ggcttaaaac
      301 gagacgtgga tgatccggag actcgggaat ggaagggaga tgatgagggc tcttcctcgg
      361 cgccctgaga caggagggag ctcaccctgg ggcgaggttg gggttgaacg cgccccggga
      421 gcgggaggtg agggtggagc gcggcgtgag ttggtgcaag agagaatccc gagcgcgcaa
      481 ccggggaagt ggggatctgg gtgcagagtg aggaaagcac gtcgaagatg ggatgggggc
      541 gccgagcggg gcatttgaag cccaagatgt agaagcaatc aggaaggccg tgggatgatt
      601 cataaggaaa gattgccctc tctgcgggct agagtgttgc tggggccgtg ggggtgctgg
      661 gcagccgcgg agggggtgcg gagcgtgggc gggtggagga tgagaaactt tggcgcggac
      721 tcggcggggc ggggtccttg cgccccctgc tgaccgatgc tgagcactgc gtctcccggt
      781 ccaacgctta ctggggcagg agccggagcg ggaagacccg ggttattgct gggtgcggac
      841 ccccacctct agatctggaa agtaaagcca gggatggggc agcccaagcc tcttaaagag
      901 gtagtcgggc cggtgaggtc ggccccgccc cggccccatt gcttagcgtt gcccgacacc
      961 tagtggccgt ctggggagcc gctagcgcgg tgggagtggt tagctaactt ctggactatt
     1021 tgcggacttt ttggttcttt ggctaaaagt gacctggagg cattggctgg ctttggggga
     1081 ctggggatgg ccccgagagc gggcttttaa gatgtctagg tgctggaggt tagggtgtct
     1141 cctaattttg aggtacattt caagtcttgg gggggcctcc cttccaatca gccgctccca
     1201 ttctcctagc cccgcccccg ccaccccacc tgcccaggga atgggggcgg gatgagggct
     1261 ggacctccct tctctcctcc ctcgccctcc tcctgtctct accacgcaag ccactcccca
     1321 cgagcctgcc ctcccgatgg ggcccctcct attctccccc cgccctcccc ctctcaccct
     1381 gtggttttta tttcacttgg cttcagcgcc aatgggctga ggttggagtt ggaagccacc
     1441 gcggactaaa gctttgttta aattcctgag aactggaaag agttacagcc tccctggcca
     1501 ggcgcctcgg cgctgtcacc cgcgctgatg aggagcaggc gagcttttaa ggatttgagg
     1561 aaagaagaac ggggggaggg gcgggaagtg aaaaatccaa gtgtgcctct tagacccggg
     1621 ggaaaggtgg ttaagctggg ggttgcagtc actactgaca acgcccctct tccgcctgtc
     1681 ccagtcccac caatcacctg cgtacagaac ggcctcaggt accatgaccg agacgtgtgg
     1741 aaacccgagc cctgccggat ctgcgtctgc gacaacggca aggtgttgtg cgatgacgtg
     1801 atctgtgacg agaccaagaa ctgccccggc gccgaagtcc ccgagggcga gtgctgtccc
     1861 gtctgccccg acggctcagg tgcggctgcg ctcggggcct ggggcctggg gcctggggcc
     1921 tggggcctgg ggctggggct gggggtggtc ggcgctcgct ggccctccgt gctggaggcc
     1981 tctgccgacg ggagcagcat tagcaaacct tggctctaac gcgcgtctct tcgtccccta
     2041 gagtcaccca ccgaccaaga aaccaccggc gtcgaggtaa tctcctgccc tcgaattttg
     2101 cccctgcgcg gcccgtgact cctcacagtc ctcccttctc taacctggcc tcttgtttct
     2161 tctcccccaa tcccacaggg acccaaggga gacactggcc cccgaggccc aagggtaagc
     2221 gttgcactct gggctgtggg gggctgcagg tgggcatggc tctcggcccc acgctcaccc
     2281 cggccccgcc ctctccccct gcagggaccc gcaggccccc ctggccgaga tggcatccct
     2341 ggacagcctg gacttcccgg accccccgga ccccccggac ctcccggacc ccctggcctc
     2401 ggaggagtaa gtggagaggc cttgtgtgtc cactctcccc tgttttgttt ttgttttttg
     2461 gcagatgaca taattttata ctttgaaata atttcaaact tacagaaaag ttgcaagaat
     2521 cctacaggaa actctcacat acccttcaca gtttgtgaca tgtgctttat tagtctctgt
     2581 ttatgtatat gtatcttttt ttttctgaac tgtttgagca agttgctaac atcaggctct
     2641 tttgcgccta aatacttagg tgtgtttttc ctaaaaacaa gagcattctc ttaactgacc
     2701 tacacaatga ttaaattcac tctctaatgt gcagtccgta ttcaaagttc accgatgtcc
     2761 cgataatgtc ctttatagat tccacccccc accaccccaa tctgggatcc agtccaggat
     2821 tatgtattgc gtttaatcat catgtctcta gtttccacaa atgtagaacg ttcctcagac
     2881 tttctttgtc tttagtggca ctgggagttt tgatgagtcc agttgttttg cagactgtcc
     2941 ctcaatttgg gattgtctca ttagattaga tgcagggatg catctttgca ggaatgtctt
     3001 aaaagcaatg ttattcttct cagcacatca caccaggaag tgcatgatgt cagtttcttc
     3061 catcctcagt gccgtcttct gcctttcaat tcactgtcct cactctgact tctcttgttt
     3121 gttctagaac tttgctcccc agctgtctta tggctatgat gagaaatcaa ccggaggaat
     3181 ttccgtgcct ggccccatgg tgagccagca gggggagcat ggatgacaga agagagaatg
     3241 ggtatccaga ggaggtgggc ataggcggct ggtatagaca gcttgggagg tccagatcac
     3301 ctttgggacc tcagagtcca gaaaggatgc aggacgactg ggtggtccca acaggcatga
     3361 atgactacat ccacatgctt tcctacagag ggatcaccat gacccccctt tcttctccct
     3421 ctatagggtc cctctggtcc tcgtggtctc cctggccccc ctggtgcacc tgtgagtatc
     3481 caggacgtct tcatatgcct ccttgggctt tggtcttttg gagggaagac tgggatgagg
     3541 gcaggagaga tgctcagaga tctcttggta agattggaga aggttgacag ggacttgtct
     3601 tctaacccat ctttttcctt cttctcaagg gtccccaagg cttccaaggt ccccctggtg
     3661 agcctggcga gcctggagct tcagtaagca ctctctatac agattcatac tccttctaca
     3721 aacacacaga ctctcctata gaagaactcc caggcctggg gtcttcctta cctcttccct
     3781 tcaatcccag ccttcccctt ctttttttct tatccatatt ctaaccacct cttctatctt
     3841 ttctagggtc ccatgggtcc ccgaggtccc ccaggtcccc ctggaaagaa tggagatgat
     3901 gtaagtatcc ccagcaagaa gataccatct gaccccatgg cctccatggg ttgggtcctg
     3961 caatttccac tccaccacat ttgggaacga tactcagagg aaggagggca agtcctctct
     4021 gatgcacgga ctgccctgga acaatgatct tttcgcttag tgagatgatt ccatgtcccc
     4081 aacaaagtga ctgttctcct caccccagcc accttagagc aatccccaac cccatccctt
     4141 tggggaaatt ggtgcgcaga tggtgaaatt aaaatgctgg tgacagaagt agacagaaat
     4201 tcctttagag gcactcagat ttcaccaaac gaaggtttca ctgtagattt aaactgagct
     4261 ctagattcaa agataagatt ctgggccccc aaacctgacc tgcaacaatc caaagaagac
     4321 tgagaccttc tccacttttc cagcccctag gcggtggtgg ggaggcagag gcatgatggt
     4381 cttttctctc cctctcaggg ggaagctgga aaacctggtc gtcctggtga gcgtgggcct
     4441 cctgggcctc aggtgagcag ggggctgtgg ctgaacctgg gcttcactgc acttgggctt
     4501 catttaggag ctgggtccac agtgatgtgt tctaatggcc cttccttgtc ttcttcatct
     4561 ctctccaggg tgctcgagga ttgcccggaa cagctggcct ccctggaatg aagggacaca
     4621 gagtgagtca cctttgagtc atttaagctc cccaagtccc tagcataccc ccatccagtc
     4681 ccaacctctt ccccaaaaga tactgagttg catcatggtg ggtggcagct acagaagtcc
     4741 caagggacag agagtggaca tccaaaagca cctccctcca tgggaaagca gtcccgatta
     4801 aacgattggg tgagatctag agccagttgg ggtttagtct agctcagaaa caaagggatg
     4861 gcggtgatga cctcccaagg ctctttctca gatctaggtg gatgtcaagg ctgttccacc
     4921 ccctccacag gttcttacct tctacctctt tcctgcttta gggtttcagt ggtttggatg
     4981 gtgccaaggg agatgctggt cctgctggtc ctaaggtaag aggctgtctg aacatcatgg
     5041 tcctccacat ccccagagtc ccaccatgaa tgaatttctc actcattatt ctctgatcta
     5101 cagggtgagc ctggcagccc tggtgaaaat ggagctcctg gtcagatggt gagtgtgccc
     5161 agttccagag ggcagggatg gggcaggagg caggggcaag atggaggcct gggggaacaa
     5221 ggctgtctcc catctcatct gacttctctt ggtttggttg tcagggcccc cgtggcctgc
     5281 ctggtgagag aggtcgccct ggagcccctg gccctgctgt aagtactcct ggccccttgg
     5341 gggatccctg agctctggaa ggggctcccc aggaactcta gggactggcc agtgctcagt
     5401 ggacttaacg gggcttcccc tctctcctgc agggtgctcg tggaaatgat ggtgctactg
     5461 gtgctgccgg gccccctgtg agtgtggcct gtaggcctca gggcctggga gtggggaggg
     5521 gtctcagtat ctgctcttgg ggctgacaat gggagcaggt tatgttggtc tgaaccccag
     5581 gacttcctct gtcccagggt gtgacttgca gctgccatct cttccttctc gctgacatct
     5641 ccatttcatt cacagggtcc caccggcccc gctggtcctc ctggcttccc tggtgctgtt
     5701 ggtgctaagg tgagaccccc cactctcctc taagcatgac cctcatgggc caaggggttc
     5761 atgtctccct gttccccaaa ccaaagggac ccagagtggc aagagagcag cccgttcact
     5821 aacacctttg tcctgggttc tccgtctctg atcttagagt cctgatcatt gctctcctgt
     5881 ccctgtctcc ccttcctcct gccatcccga gaggcaaggt tgggtttccc agggtggctt
     5941 ctgatatgtc ctttcttctg attcagggtg aagctggtcc ccaagggccc cgaggctctg
     6001 aaggtcccca gggtgtgcgt ggtgagcctg gcccccctgg ccctgctggt gctgctggcc
     6061 ctgctgtaag tgtccccgac tcagtgtccc ctttgccact ttctaacctc agagtccttg
     6121 cctgttgctg acactccttt ctctgtgcca cagggaaacc ctggtgctga tggacagcct
     6181 ggtgctaaag gtgccaatgt aagtatcctg ccaggcttca gtcccactcc tgccgcctgc
     6241 agcctgcctg cccctttccc tctgctccta ggctcacgcc ctggctgtct gcctcccaca
     6301 gggtgctcct ggtattgctg gtgctcctgg cttccctggt gcccgaggcc cctctggacc
     6361 ccagggcccc ggcggccctc ctggtcccaa gggtaacagc gtgagtacca aactctccct
     6421 tctgcccacc ccatgcactg gctccagtgc ggctctcatc tggggagcag gaagacgcag
     6481 gccaactgag cgcccccgac tctcagctca tcctcttctc cccccttgca gggtgaacct
     6541 ggtgctcctg gcagcaaagg agacactggt gctaagggag agcctgtaag tctccccgcc
     6601 atccttcttg cagcccagcc caccctgccc taggagcccc ctgagggaaa tccagaaagg
     6661 aagaggagcc cctagtcttc tgggggagtc cctgccacac ccccaggaac ccctgacact
     6721 ggaggcccag cctcagccgg ctctgaggct ggcacaggat ggcccctcac cacaggccgc
     6781 ctcctcctct cggccctctc cagggccctg ttggtgttca aggaccccct ggccctgctg
     6841 gagaggaagg aaagcgagga gctcgaggtg aacccggacc cactggcctg cccggacccc
     6901 ctggcgagcg tgtaagtgtc cctgcccgcc ccctcccgct ccaccctcat tgcctggctg
     6961 gtgcctgtgt gtcgcggagt tcactggcct cctctcctcc tgcagggtgg acctggtagc
     7021 cgtggtttcc ctggcgcaga tggtgttgct ggtcccaagg taacctctcc ttgcggccgg
     7081 ggggctgacc ctgccgctcc ctgggcatct tcttcctctt ttggcccgtg gcaaagagcc
     7141 acaaacttga gaccctaact gttcctgtga cttcccccaa ccagggtccc gctggtgaac
     7201 gtggttctcc tggccctgct ggccccaaag gatctcctgg tgaagctggt cgtcccggtg
     7261 aagctggtct gcctggtgcc aaggtgaggc cccaggcttt cagcctggct tggccaggcc
     7321 ctgaccatcc cgtgtagggt ctgggatgag gcgttctgga tcaggcccaa gggtctgccc
     7381 tctggagtcc tcccccacct ccatcatgct tctccccaag tcccactcat acctctctgc
     7441 ctccctaggg tctgactgga agccctggca gccctggtcc tgatggcaaa actggccccc
     7501 ctgtaagtat cactccccct gaaccccctg ccattgtcct gtctgcctcc ctgctgtcct
     7561 cactgctgct ttcgtgcctc ccatccttag ggtcccgccg gtcaagatgg tcgccccgga
     7621 cccccaggcc cacctggtgc ccgtggtcag gctggtgtga tgggattccc tggacctaaa
     7681 ggtgctgctg tgagtattaa gtgaggatcc atgaagagcc agggacaaac acacctgaga
     7741 cttgaaggag tcctgggctc tgggctcagc tgtgccgctg acctgccgtg tggccactca
     7801 ctctcacttt ctggacctca gcctccctat ctgtaaaatg aaagacttct cggcggggca
     7861 cggtggctca tgcctgtaat cccagcactt tgggaggcca aggcgggcag accatgaggt
     7921 caggagtttg agaccagtcg ggccaacata gtgaaaccac gtctctacta aaaatacaaa
     7981 agattagctg ggtgtggtgg tgtgcacctg taaccccagc tagtcaggag gctgaggcag
     8041 gagaattgca tgaacccggg aggtggaggt tgcagtgagc tgagatcacg ccattgcact
     8101 ccagcctggg caacagtgcg agattccatc tcaaaaaaaa aaaaaaagaa gaaagaaaga
     8161 aagaaaaaat gaaacacttc tccaggctcc atgaccactg ctctgtcctg gaaataagtg
     8221 ttgttggtgg ccctccaccc cgacacgtgg ggataggaca ggcctttgat atgataggca
     8281 cccccagtct tggtggattc tttgaggtcc aaaaggagat agcagagaag atgaaagccc
     8341 tttgcagtgc aggccacagc gggcatctaa cagggaaaag gcagaggagc ctggaagggc
     8401 atcttgggag gagtgggctc agaaagggcc cagcaagaag cacctgcagg ggcattcccc
     8461 gggggccaaa cagtcttttg aaaagaaagt cccttaaaaa gtcccactca gagtaaatga
     8521 gaggccccag gaggccctgg cttctcactt cagccccctc aaccctaact ccctttctcc
     8581 acagggagag cccggcaagg ctggagagcg aggtgttccc ggaccccctg gcgctgtcgt
     8641 aagtatctcc tttccatccc tacctccttc ccattgctgc cccggcactt tctcctccct
     8701 gcaggagggg tgctagaggc cacggtcctc agctgctcgg ggcctcctaa ccctgagttc
     8761 ccctttgctc tctccctgca gggtcctgct ggcaaagatg gagaggctgg agctcaggga
     8821 ccccctggcc ctgctgtgag tgtccctgat ggggagatct ggggagcaga aaaggggaga
     8881 caccctcagc ccctcgtctc ctcggcctcc ccgtgactgt agtgttctct ctgtgcaggg
     8941 tcccgctggc gagagaggtg aacaaggccc tgctggctcc cccggattcc aggtgaggcc
     9001 tcatggctgt caggatgctg ggaggtaggg gtaggaaaca cctctttggt ctcttccaga
     9061 ttctaaacct tccctccctt cttcccccat ttcccaccta cagggtctcc ctggtcctgc
     9121 tggtcctcca ggtgaagcag gcaaacctgg tgaacaggta agagggagca gccggccaga
     9181 ggggtgggag atgcagggaa tccagaggga caggcccccg ctcctagcta atcagacagc
     9241 catcaactag agggattgag gttagacgcc ggaaagaact tcctcccatg aagggagcag
     9301 cacagaggga agtgggggct gcatgattgc tagtctgggt gacttctttt aagagctgct
     9361 ggaatatgct gtgactttcc ctcaaccctt ctattgataa atcttggtcc atagtttggg
     9421 gaggggggaa gcctttgaca catccctagg aggaagagag gggctgtttg ggataatctc
     9481 aattcagtgc tgagaagggg ttcctctcta atcacggcca gaccccagga ggaaggaccg
     9541 tgctttccag cagagtggcc ccaggtgggt tttgctcact gtctgttcct ctctccctcc
     9601 ccctcagggt gttcctggag accttggcgc ccctggcccc tctggagcaa gagtaagtag
     9661 gcctctctcg ctgcatccgt caaggtgcgt cgtacttggc cctatctcca gagcagcctt
     9721 cacatgccct gtccttccct tctagggcga gagaggtttc cctggcgagc gtggtgtgca
     9781 aggtccccct ggtcctgctg gtccccgagg ggccaacggt gctcccggca acgatggtgc
     9841 taaggtgagg gcagcgtgga aggggctctg gcaagtggcc cagggaccag gtctcacccc
     9901 tcctgcagca ggggatggcg ggccatgacc aaagccatgg agatagggtg tggggtgggg
     9961 ggaaaagacc agggcagggg cccacacaca gcctggagtc tgggctgtga gtcttttcat
    10021 cttttctcaa ggcttgtcgt tggccttgga aacaagcctg ggagatacca agcggggctt
    10081 agggctgtga cccactcttg gggccccagg cctcactcca gtcttcttgg ttgtcacata
    10141 gggtgatgct ggtgcccctg gagctcccgg tagccagggc gcccctggcc ttcagggaat
    10201 gcctggtgaa cgtggtgcag ctggtcttcc agggcctaag ggtgacagag taagttcaac
    10261 cttccccctc ccctgagccc tacatggctc ccatctctgc ctgctttgaa tctctcagca
    10321 tctctccttc tctctgggat ctgtccctct tctcgctaat cctcccttct tcccctttcc
    10381 cctctggcct ttttgctgat gaatcctctc cctgtggtcc aggcccatct atccccatgg
    10441 gttaccatgg tgatgagagg tgggggcatc tccttggtgg aggctccctt attcatcccg
    10501 ctacacaagt caggggcctc ttaacctcag ttccacctga gtctccaggc aggcaccctt
    10561 tttcctgaaa gaatctttga gtccttggcc caggtggagg cagggcagag ctgcagaggg
    10621 cctctcagga aacccagaca caagcagaac actataggtc acctccttgc cccacactgg
    10681 aaatctcaag cttatccatg tctttagggt gatgctggtc ccaaaggtgc tgatggctct
    10741 cctggcaaag atggcgtccg tggtctgact ggccccattg gtcctcctgg ccctgctggt
    10801 gcccctggtg acaaggtgag gtggccgcct ccccaccttc tgccctaaca catagcctcc
    10861 tcagcaggcc tgggcacggt tccgtggggt tgcgttggga gagcaggtcc tgccaaactg
    10921 agctgtcaac ctgggaacct ggagggacca gaaggagggg aggctctcct ggggtcatct
    10981 actaggagta ttcaggggag gccctgaccc tgagcctctt gtcccttgct ctcagggtga
    11041 aagtggtccc agcggccctg ctggtcccac tggagctcgt ggtgcccccg taagtacaga
    11101 agacctgtta agaccccata cttggccctt ccctcccttc acacagcacc cctggccctg
    11161 tctgtgcctt caccccttgc ctctcccctc accgcatccc cgccttccct cctgtcagcg
    11221 catctctcca atctgactcc ttttcttcta gggagaccgt ggtgagcctg gtccccccgg
    11281 ccctgctggc tttgctggcc cccctgtgag taccaagacc cccatcattt ttcatcaccg
    11341 actgggacct gggacctcga gggacggaat gaggacaaag gcgtcagcca tcctcagggg
    11401 agaagggtgg agacgggatt gtttcccacc caagcatctt cctgcctcca ttactgctcc
    11461 tcccccaggt agtggaaact cctgcctcct tccctccatt caccgccctg cttcctcccc
    11521 cagggtgctg acggccaacc tggtgctaaa ggcgaacctg gtgatgctgg tgctaaaggc
    11581 gatgctggtc cccctggccc tgccggaccc gctggacccc ctggccccat tgtgagtggc
    11641 ttggccctct gtgcccacga ggctggtggg ctgggaccca ggacgggtcc aggcttgatg
    11701 cctctgtgct ctcctacagg gtaatgttgg tgctcctgga gccaaaggtg ctcgcggcag
    11761 cgctggtccc cctgtgagta tcacccgcct ctctgttgag cctctcccct ctccccaggc
    11821 agcggtggca ggtgagggca gctgggtcgg atgagttggc tgttctccct ctgactgttc
    11881 ctatgttctc tccttccagg gtgctactgg tttccctggt gctgctggcc gagtcggtcc
    11941 tcctggcccc tctgtaagtc tctgcagcag agtccactgc tctaggttgg gggtgctggg
    12001 tgggggctgc cagaaggatg gtggggctga ctgaggaccc aatgatgcac cagagccccc
    12061 tggagtctga cagcccctcc tatcctcatc cagggaaatg ctggaccccc tggccctcct
    12121 ggtcctgctg gcaaagaagg cggcaaaggt ccccgtggtg agactggccc tgctggacgt
    12181 cctggtgaag ttggtccccc tggtccccct ggccctgctg gcgagaaagg atcccctggt
    12241 gctgatggtc ctgctgtaag tgccagctca gatctctgca gctccggagg tgtgcagagc
    12301 tggggagggg tccctgtgct gctctctggc acctcacccc tgtttgcctc ccaaagggtg
    12361 ctcctggtac tcccgggcct caaggtattg ctggacagcg tggtgtggtc ggcctgcctg
    12421 gtcagagagg agagagaggc ttccctggtc ttcctggccc ctctgtaagt gcccccctca
    12481 ccttgggggg ccctgagaaa aaccatcaca ggacttggag tggggcggag ccaaggagaa
    12541 cagatttggt agagatgact ccagcggact caagggtcct cccagaccct atctctggcc
    12601 tgactctttc ttctccctta gggtgaacct ggcaaacaag gtccctctgg agcaagtggt
    12661 gaacgtggtc cccctggtcc catgggcccc cctggattgg ctggaccccc tggtgaatct
    12721 ggacgtgagg tgagcagtcc ccagccccca tgccagtacc ctcagcatgg ccattgtggc
    12781 cttgcctaag ccctcttccc cggctgactc tcacttctct ctctctctct ctgcaggggg
    12841 ctcctggtgc cgaaggttcc cctggacgag acggttctcc tggcgccaag gtaagatggc
    12901 aacactccat gaccacagcc ttgtctgctg cttccctgcc ccatcctggc ccttcacccg
    12961 gggctgaccc atattcccct gctctccccg ccagggtgac cgtggtgaga ccggccccgc
    13021 tggaccccct ggtgctcctg gtgctcctgg tgcccctggc cccgttggcc ctgctggcaa
    13081 gagtggtgat cgtggtgaga ctgtaagtag ctgggctcca gttccctgta cctggtcagg
    13141 ccagggactc ttcaggcctc cttagaggcc tggggatggg tgtcggactt cacccaggca
    13201 gggggaggaa aggagatcct gcaagatgtc agggccttaa tccaaaaaac tgagttaaag
    13261 ctcagcccca agtcccctct cccagacagg accgcctctc ccatgagttg gccccagctc
    13321 ccgtgaagat tgcagtgggg aggtttccct gggagttggg agagatggcc acagtgggaa
    13381 gcagctgagg agagagagat ccagcagagg ggaggcctca tcctgcagcc ccagcctcag
    13441 ccttccctgg ccaagagctc atgctttcct tgctctcccc agggtcctgc tggtcccgcc
    13501 ggtcctgtcg gccctgttgg cgcccgtggc cccgccgtaa gtaccctgct gtgtccccca
    13561 tgcctttaga actctacaga tgcagacagt gccccactcg atgccaatgg aacttccgcc
    13621 tgacagtttg tccctttctc tcttctaggg accccaaggc ccccgtggtg acaagggtga
    13681 gacaggcgaa cagggcgaca gaggcataaa gggtcaccgt ggcttctctg gcctccaggg
    13741 tccccctggc cctcctgtaa gtatgctcag cccctcccca gtccccatgc tgtgctgtgg
    13801 gataggaggg ggagcttcgc ctcagtttcc ccctctggat agtcattctt tcccctccct
    13861 agtggggact ggggtctgaa gatttgtggg catgtccaag tagcttctga gagggtgagg
    13921 ggtacacaga gagggattat gggagaggtc tctgcctatg gacaccctcg ggctagattt
    13981 ccagaataat gaaggggcat gggttgccca cactgccctt gtctctccag ccaggccctc
    14041 aggctacatt tgacgctcac tgggcctgaa ctgccttttt tatctgtcct tcagggctct
    14101 cctggtgaac aaggtccctc tggagcctct ggtcctgctg gtccccgagt aagtcatgcc
    14161 ttctctctcc tcttcctgag ccccaagccc aggctcacct cggggaccct tgccagggac
    14221 ccaggcaccc tttgcctctc tggagaaggg ttcagggaca gggagtgggc aaagagagga
    14281 agaatcctga acaaacaatc tgatctagct ttggcctctc tgctccccaa tccgtcctcc
    14341 cctggctcag cggctgggag gagctatggc atgtcctatg gaaagaggct gaggctggct
    14401 ctatgagccg tggggccaga gccagcaggg agggtggtgg gcctctcctc cagagctggg
    14461 gttgttcggg cttctggcag cctttctcaa accatttccc ccactccagg gtccccctgg
    14521 ctctgctggt gctcctggca aagatggact caacggtctc cctggcccca ttgggccccc
    14581 tggtcctcgc ggtcgcactg gtgatgctgg tcctgttgta tgtagcccct catcccctct
    14641 gctcatggcc ctccagcccc caaagcactt ggatgccggt aatccccact ctcttccctc
    14701 tctgtgcagg gtccccccgg ccctcctgga cctcctggtc cccctggtcc tcccagcgct
    14761 ggtttcgact tcagcttcct gccccagcca cctcaagaga aggctcacga tggtggccgc
    14821 tactaccggg ctgatgatgc caatgtggtt cgtgaccgtg acctcgaggt ggacaccacc
    14881 ctcaagagcc tgagccagca gatcgagaac atccggagcc cagagggcag ccgcaagaac
    14941 cccgcccgca cctgccgtga cctcaagatg tgccactctg actggaagag tggtgagggc
    15001 ctgccctagc ctctccctcc ctcctactcc tgccatgcca gggtccccat gcccatatgt
    15061 gcccctacca tatggtgctg gctgctccct ttccctgact ccatcttgcc ctgccctacc
    15121 acaggagagt actggattga ccccaaccaa ggctgcaacc tggatgccat caaagtcttc
    15181 tgcaacatgg agactggtga gacctgcgtg taccccactc agcccagtgt ggcccagaag
    15241 aactggtaca tcagcaagaa ccccaaggac aagaggcatg tctggttcgg cgagagcatg
    15301 accgatggat tccaggtgcg tgagctggac ctcagagcca gtgttaggag atgggctagc
    15361 ccagtgctca gaagggacat gaagtcctgg agtaggtctc tgctaagggt gatggacaga
    15421 gctgggctgg gaggcagggg tctcaggtcc ctgatagtgg ttcagacaca ggctgccgat
    15481 gggcaggtgg tgcctcctct cgatataacg gtgcattggg cagctctctg aggaccctgg
    15541 acagggaggc caggcaggac tagaggttcc cgcatagcgg ctcactcttc cctctctccc
    15601 ctcccctgca gttcgagtat ggcggccagg gctccgaccc tgccgatgtg gccatccagc
    15661 tgaccttcct gcgcctgatg tccaccgagg cctcccagaa catcacctac cactgcaaga
    15721 acagcgtggc ctacatggac cagcagactg gcaacctcaa gaaggccctg ctcctccagg
    15781 gctccaacga gatcgagatc cgcgccgagg gcaacagccg cttcacctac agcgtcactg
    15841 tcgatggctg cacggtgagt gcccagaatc cccaggcagg gccccacctc tccggccttg
    15901 ggctttttgg ccaggccata gtgccctctc tccatcactc ccacgtggta atgccccctc
    15961 ccgttgtctc cgccccaccc cagagtcaca ccggagcctg gggcaagaca gtgattgaat
    16021 acaaaaccac caagacctcc cgcctgccca tcatcgatgt ggcccccttg gacgttggtg
    16081 ccccagacca ggaattcggc ttcgacgttg gccctgtctg cttcctgtaa actccctcca
    16141 tcccaacctg gctccctccc acccaaccaa ctttcccccc aacccggaaa cagacaagca
    16201 acccaaactg aaccccctca aaagccaaaa aatgggagac aatttcacat ggactttgga
    16261 aaatattttt ttcctttgca ttcatctctc aaacttagtt tttatctttg accaaccgaa
    16321 catgaccaaa aaccaaaagt gcattcaacc ttaccaaaaa aaaaaaaaaa aaaagaataa
    16381 ataaataact ttttaaaaaa ggaagcttgg tccacttgct tgaagaccca tgcgggggta
    16441 agtccctttc tgcccgttgg gcttatgaaa ccccaatgct gccctttctg ctcctttctc
    16501 cacacccccc ttggggcctc ccctccactc cttcccaaat ctgtctcccc agaagacaca
    16561 ggaaacaatg tattgtctgc ccagcaatca aaggcaatgc tcaaacaccc aagtggcccc
    16621 caccctcagc ccgctcctgc ccgcccagca cccccaggcc ctgggggacc tggggttctc
    16681 agactgccaa agaagccttg ccatctggcg ctcccatggc tcttgcaaca tctccccttc
    16741 gtttttgagg gggtcatgcc gggggagcca ccagcccctc actgggttcg gaggagagtc
    16801 aggaagggcc acgacaaagc agaaacatcg gatttgggga acgcgtgtca atcccttgtg
    16861 ccgcagggct gggcgggaga gactgttctg ttccttgtgt aactgtgttg ctgaaagact
    16921 acctcgttct tgtcttgatg tgtcaccggg gcaactgcct gggggcgggg atgggggcag
    16981 ggtggaagcg gctccccatt ttataccaaa ggtgctacat ctatgtgatg ggtggggtgg
    17041 ggagggaatc actggtgcta tagaaattga gatgcccccc caggccagca aatgttcctt
    17101 tttgttcaaa gtctattttt attccttgat atttttcttt tttttttttt ttttttgtgg
    17161 atggggactt gtgaattttt ctaaaggtgc tatttaacat gggaggagag cgtgtgcggc
    17221 tccagcccag cccgctgctc actttccacc ctctctccac ctgcctctgg cttctcaggc
    17281 ctctgctctc cgacctctct cctctgaaac cctcctccac agctgcagcc catcctcccg
    17341 gctccctcct agtctgtcct gcgtcctctg tccccgggtt tcagagacaa cttcccaaag
    17401 cacaaagcag tttttccccc taggggtggg aggaagcaaa agactctgta cctattttgt
    17461 atgtgtataa taatttgaga tgtttttaat tattttgatt gctggaataa agcatgtgga
    17521 aatgacccaa a
//`;

    function updateCodonRefView() {
        codonRefGrid.style.display = isCodonGridView ? '' : 'none';
        codonRefTable.style.display = isCodonGridView ? 'none' : '';
        toggleCodonTable.innerHTML = isCodonGridView ? '切换到传统表格 <span class="arrow">▼</span>' : '切换回卡片列表 <span class="arrow">▶</span>';
    }

    buildCodonRefViews();
    toggleCodonTable.addEventListener('click', () => {
        isCodonGridView = !isCodonGridView;
        updateCodonRefView();
    });
    readingFrameGroup.addEventListener('click', e => {
        const btn = e.target.closest('button'); if (!btn) return;
        currentOffset = +btn.dataset.offset;
        readingFrameGroup.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (originalCleanedSeq) performTranslation();
    });
    strictModeCheckbox.addEventListener('change', function() {
        isStrictMode = this.checked;
        readingFrameGroup.classList.toggle('disabled', isStrictMode);
        readingFrameGroup.style.display = isStrictMode ? 'none' : 'inline-flex';
        readingFrameLabel.style.display = isStrictMode ? 'none' : 'inline';
        if (originalCleanedSeq) performTranslation();
    });
    readingFrameGroup.classList.add('disabled'); readingFrameGroup.style.display = 'none'; readingFrameLabel.style.display = 'none';
    opsType.addEventListener('change', function() {
        const t = this.value;
        opsPosEndGroup.style.display = (t==='delete') ? 'flex' : 'none';
        opsSeqGroup.style.display = (t==='insert'||t==='replace') ? 'flex' : 'none';
        if (t === 'insert') {
            opsPosLabel.textContent = '插入位置(之前)';
            $('opsSeqLabel').textContent = '插入序列';
        } else if (t === 'delete') {
            opsPosLabel.textContent = '起始位置';
        } else if (t === 'replace') {
            opsPosLabel.textContent = '替换位置';
            $('opsSeqLabel').textContent = '替换碱基';
        }
    });
    dnaInput.addEventListener('input', () => {
        const cleaned = cleanSequence(dnaInput.value);
        charCount.textContent = `${cleaned.length} 个有效碱基`;
        inputAlert.textContent = '';
        seqHighlightContainer.classList.remove('visible');
    });
    function cleanSequence(raw) {
        let s = raw.toUpperCase().trim().replace(/U/g,'T');
        if (s.startsWith('>')) s = s.split(/[\n\r]+/).filter(l => !l.startsWith('>')).join('');
        return s.replace(/[^ATCG]/g,'');
    }
    function reverseComplement(seq) {
        const comp = {A:'T',T:'A',C:'G',G:'C',U:'A',N:'N'};
        return seq.split('').reverse().map(b => comp[b] || b).join('');
    }
    function parseLocation(location, fullSequence) {
        const expr = (location || '').replace(/\s+/g, '').trim();
        if (!expr) return '';
        function splitTopLevel(value) {
            const parts = [];
            let depth = 0;
            let current = '';
            for (let i = 0; i < value.length; i++) {
                const ch = value[i];
                if (ch === '(') depth++;
                else if (ch === ')') depth--;
                if (ch === ',' && depth === 0) {
                    if (current.trim()) parts.push(current.trim());
                    current = '';
                    continue;
                }
                current += ch;
            }
            if (current.trim()) parts.push(current.trim());
            return parts;
        }
        function parseExpr(value) {
            let current = value.trim();
            let complement = false;
            if (current.startsWith('complement(') && current.endsWith(')')) {
                complement = true;
                current = current.slice('complement('.length, -1).trim();
            }
            if (current.startsWith('join(') && current.endsWith(')')) {
                const inner = current.slice('join('.length, -1).trim();
                const parts = splitTopLevel(inner);
                const ranges = [];
                parts.forEach(part => {
                    ranges.push(...parseExpr(part));
                });
                return ranges.map(range => ({...range, complement: complement || range.complement}));
            }
            const match = current.match(/^<?(\d+)\.\.?(-?\d+)?$/);
            if (match) {
                const start = parseInt(match[1], 10);
                const end = match[2] ? parseInt(match[2], 10) : start;
                return [{start, end, complement}];
            }
            return [];
        }
        const parsed = parseExpr(expr);
        let extracted = '';
        parsed.forEach(range => {
            let chunk = fullSequence.slice(range.start - 1, range.end);
            if (range.complement) chunk = reverseComplement(chunk);
            extracted += chunk;
        });
        return extracted;
    }
    function isLikelyGenBank(raw) {
        const text = raw.replace(/\r/g, '');
        return /(^|\n)\s*LOCUS\s+\S+/i.test(text) && /(^|\n)\s*FEATURES\b/i.test(text) && /(^|\n)\s*ORIGIN\b/i.test(text);
    }
    function parseNcbiGenBank(raw) {
        if (!isLikelyGenBank(raw)) return null;
        const text = raw.replace(/\r/g, '');

        // --- Extract header-level metadata ---
        const locusMatch = text.match(/^LOCUS\s+(\S+)\s+(\d+)\s+bp\s+(\S[^\n]*)/im);
        const definitionMatch = text.match(/^DEFINITION\s+(.+)$/im);
        const sourceMatch = text.match(/^\s*SOURCE\s+(.+)$/im);
        const organismMatch = text.match(/^\s{2}ORGANISM\s+(.+)$/im);

        let organism = '';
        if (sourceMatch) organism = sourceMatch[1].trim();
        if (organismMatch) {
            // Collect taxonomy lines until blank line
            const orgIdx = text.indexOf(organismMatch[0]);
            const afterOrg = text.slice(orgIdx + organismMatch[0].length);
            const taxLines = [];
            const lines = afterOrg.split(/\n/);
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                if (/^\s{3,}\S/.test(line) && !/^\s{2}[A-Z]/.test(line)) {
                    taxLines.push(line.trim());
                } else if (/^\s{2,}[A-Z]/.test(line) || line.trim() === '') {
                    break;
                }
            }
            organism = organismMatch[1].trim() + (taxLines.length ? ' (' + taxLines.join('; ') + ')' : '');
        }

        const geneInfo = {
            accession: locusMatch ? locusMatch[1] : '',
            bp: locusMatch ? locusMatch[2] : '',
            molecule: locusMatch ? locusMatch[3].trim() : '',
            definition: definitionMatch ? definitionMatch[1].trim() : '',
            organism: organism || '',
            geneName: '',
            synonyms: '',
            dbRefs: ''
        };

        // --- Parse sequence ---
        const originMatch = text.match(/ORIGIN\s*([\s\S]*?)(\n\/\/|$)/);
        let fullSequence = '';
        if (originMatch) {
            originMatch[1].split(/\n/).forEach(line => {
                const cleaned = line.replace(/^\s*\d+\s*/, '').replace(/\s+/g, '');
                if (cleaned) fullSequence += cleaned;
            });
        }
        if (!fullSequence) return null;

        const featuresStart = text.indexOf('FEATURES');
        const originStart = text.indexOf('ORIGIN');
        if (featuresStart < 0 || originStart < 0) return null;
        const featuresBlock = text.slice(featuresStart, originStart);
        const featLines = featuresBlock.split(/\n/);
        const cdsEntries = [];
        let currentFeature = null;
        let lastQualifierKey = null;
        let inQualifierContinuation = false;

        featLines.forEach(line => {
            const featureMatch = line.match(/^\s{5}([A-Za-z0-9_]+)\s+(.+)$/);
            if (featureMatch) {
                currentFeature = {
                    name: featureMatch[1],
                    location: featureMatch[2].trim(),
                    qualifiers: {}
                };
                lastQualifierKey = null;
                inQualifierContinuation = false;
                if (featureMatch[1] === 'CDS') cdsEntries.push(currentFeature);
                return;
            }

            const qualifierMatch = line.match(/^\s{21}\/([A-Za-z0-9_]+)=(.+)$/);
            if (currentFeature && qualifierMatch) {
                const key = qualifierMatch[1];
                let rawValue = qualifierMatch[2].trim();
                // Handle duplicate keys (e.g. multiple db_xref) by accumulating in an array
                if (currentFeature.qualifiers[key] !== undefined) {
                    if (Array.isArray(currentFeature.qualifiers[key])) {
                        currentFeature.qualifiers[key].push(rawValue);
                    } else {
                        currentFeature.qualifiers[key] = [currentFeature.qualifiers[key], rawValue];
                    }
                } else {
                    currentFeature.qualifiers[key] = rawValue;
                }
                lastQualifierKey = key;
                inQualifierContinuation = true;
                return;
            }

            const continuationMatch = currentFeature && /^\s{21}([^\/].*)$/.test(line);
            if (continuationMatch && currentFeature) {
                const cont = line.trim();
                if (inQualifierContinuation && lastQualifierKey) {
                    const cur = currentFeature.qualifiers[lastQualifierKey];
                    if (Array.isArray(cur)) {
                        cur[cur.length - 1] += ' ' + cont;
                    } else {
                        currentFeature.qualifiers[lastQualifierKey] += ' ' + cont;
                    }
                } else {
                    currentFeature.location += ' ' + cont;
                }
                return;
            }

            if (currentFeature) {
                lastQualifierKey = null;
                inQualifierContinuation = false;
            }
        });

        // --- Extract gene-level info from the first gene or CDS feature ---
        const normalizeQualifier = value => {
            if (Array.isArray(value)) {
                return value.map(v => normalizeQualifier(v)).join(', ');
            }
            let v = String(value || '').trim();
            if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
                v = v.slice(1, -1);
            }
            return v.replace(/\s+/g, ' ');
        };

        // Try to get gene info from first CDS entry's qualifiers
        if (cdsEntries.length) {
            const firstCds = cdsEntries[0];
            const getQ = (key) => normalizeQualifier(firstCds.qualifiers[key] || '');
            geneInfo.geneName = getQ('gene');
            geneInfo.synonyms = getQ('gene_synonym');
            geneInfo.product = getQ('product');
            geneInfo.dbRefs = getQ('db_xref');
        }

        if (!cdsEntries.length) return null;
        return {
            geneInfo,
            fullSequence,
            cdsEntries: cdsEntries.map((entry, index) => {
                const normalizedQualifiers = {};
                Object.keys(entry.qualifiers).forEach(key => {
                    normalizedQualifiers[key] = normalizeQualifier(entry.qualifiers[key]);
                });
                const parsedSeq = parseLocation(entry.location, fullSequence);
                const codonStart = parseInt(normalizedQualifiers.codon_start || '1', 10);
                const effectiveSeq = codonStart > 1 ? parsedSeq.slice(codonStart - 1) : parsedSeq;
                const translation = translateSequence(effectiveSeq, 0, false);
                const protein = translation.results.map(r => r.isStop ? '*' : r.oneLetter).join('');
                return {
                    id: index + 1,
                    name: normalizedQualifiers.gene || normalizedQualifiers.product || `CDS ${index + 1}`,
                    product: normalizedQualifiers.product || '',
                    gene: normalizedQualifiers.gene || '',
                    location: entry.location,
                    sequence: effectiveSeq,
                    protein,
                    proteinFromQualifier: normalizedQualifiers.translation || '',
                    codonStart,
                    length: effectiveSeq.length,
                    hasStop: translation.results.some(r => r.isStop)
                };
            }).filter(entry => entry.sequence && entry.sequence.length >= 3)
        };
    }
        // --- Example select behavior ---
        // Reset to placeholder on focus so re-selecting the same option still triggers change
        exampleSelect.addEventListener('focus', () => {
            exampleSelect.value = '';
        });
        exampleSelect.addEventListener('change', () => {
            const val = exampleSelect.value;
            if (val === 'anp') {
                dnaInput.value = exampleAnpSeq;
            } else if (val === 'genbank') {
                dnaInput.value = exampleGbContent;
            } else {
                return; // placeholder, do nothing
            }
            dnaInput.dispatchEvent(new Event('input'));
            performTranslation();
            // Keep the selected value so the select shows which example is active
        });
    function translateSequence(seq, offset, strict) {
        const normalizedSeq = cleanSequence(seq);
        let start = offset, usedStrict = false;
        if (strict) {
            const idx = normalizedSeq.indexOf('ATG'); if (idx === -1) return {error:'no_start_codon', cleanedSeq:normalizedSeq};
            start = idx; usedStrict = true;
        }
        const results = []; let stopEnc = false, stopPos = -1;
        for (let i = start; i+3 <= normalizedSeq.length; i+=3) {
            const codon = normalizedSeq.substring(i,i+3), info = codonTable[codon];
            const entry = {codon, position:i+1, info};
            if (info) {
                entry.fullName = info.fullName; entry.threeLetter = info.threeLetter;
                entry.oneLetter = info.oneLetter; entry.category = info.category;
                entry.categoryCN = info.categoryCN; entry.isStart = info.isStart||false;
                entry.isStop = info.isStop||false;
            } else {
                entry.fullName='未知'; entry.threeLetter='???'; entry.oneLetter='?';
                entry.category='stop'; entry.categoryCN='未知'; entry.isStop=false; entry.isStart=false;
            }
            results.push(entry);
            if (strict && entry.isStop) { stopEnc = true; stopPos = i+1; break; }
        }
        return {results, totalCodons:results.length, remainingBases:Math.max(0,normalizedSeq.length-(start+results.length*3)),
                cleanedSeq:normalizedSeq, offset:start, usedStrictStart:usedStrict, stopEncountered:stopEnc, stopPosition:stopPos, strictMode:strict};
    }
    function renderNcbiCdsPanel() {
        if (!currentNcbiCdsEntries.length) {
            ncbiCdsPanel.style.display = 'none';
            ncbiCdsSummary.innerHTML = '';
            return;
        }
        ncbiCdsPanel.style.display = '';
        const currentEntry = currentNcbiCdsEntries[currentNcbiCdsIndex] || currentNcbiCdsEntries[0];
        ncbiCdsSummary.innerHTML = '';

        // --- Gene basic info block ---
        if (currentGeneInfo && (currentGeneInfo.geneName || currentGeneInfo.organism || currentGeneInfo.definition)) {
            const infoBlock = document.createElement('div');
            infoBlock.className = 'ncbi-gene-info';
            const rows = [];
            if (currentGeneInfo.geneName) {
                rows.push(`<span class="ncbi-gene-label">基因</span><span class="ncbi-gene-value"><strong>${currentGeneInfo.geneName}</strong>${currentGeneInfo.synonyms ? ' <small style="color:#94a3b8;">(' + currentGeneInfo.synonyms + ')</small>' : ''}</span>`);
            }
            if (currentGeneInfo.accession) {
                rows.push(`<span class="ncbi-gene-label">登录号</span><span class="ncbi-gene-value">${currentGeneInfo.accession} · ${currentGeneInfo.bp} bp · ${currentGeneInfo.molecule}</span>`);
            }
            if (currentGeneInfo.organism) {
                rows.push(`<span class="ncbi-gene-label">物种</span><span class="ncbi-gene-value">${currentGeneInfo.organism}</span>`);
            }
            if (currentGeneInfo.definition) {
                rows.push(`<span class="ncbi-gene-label">定义</span><span class="ncbi-gene-value">${currentGeneInfo.definition}</span>`);
            }
            if (currentGeneInfo.product) {
                rows.push(`<span class="ncbi-gene-label">产物</span><span class="ncbi-gene-value">${currentGeneInfo.product}</span>`);
            }
            if (currentGeneInfo.dbRefs) {
                rows.push(`<span class="ncbi-gene-label">交叉引用</span><span class="ncbi-gene-value">${currentGeneInfo.dbRefs}</span>`);
            }
            infoBlock.innerHTML = rows.map(r => `<div class="ncbi-gene-row">${r}</div>`).join('');
            ncbiCdsSummary.appendChild(infoBlock);
        }

        // --- CDS selector (compact) ---
        if (currentNcbiCdsEntries.length > 1) {
            const list = document.createElement('div');
            list.className = 'ncbi-cds-list';
            currentNcbiCdsEntries.forEach((entry, index) => {
                const chip = document.createElement('button');
                chip.className = `ncbi-cds-chip${index === currentNcbiCdsIndex ? ' active' : ''}`;
                chip.type = 'button';
                const label = entry.product || entry.name;
                chip.innerHTML = `<span class="ncbi-cds-name">${label}</span><span class="ncbi-cds-meta">${entry.length} bp</span>`;
                chip.title = `${entry.name} · ${entry.location} · ${entry.length} bp`;
                chip.addEventListener('click', () => {
                    currentNcbiCdsIndex = index;
                    const selected = currentNcbiCdsEntries[currentNcbiCdsIndex];
                    if (selected) applySelectedNcbiCds(selected);
                });
                list.appendChild(chip);
            });
            ncbiCdsSummary.appendChild(list);
        }
    }
    function applySelectedNcbiCds(entry) {
        const translation = translateSequence(entry.sequence, 0, false);
        originalCleanedSeq = entry.sequence; currentCleanedSeq = entry.sequence;
        originalTranslation = JSON.parse(JSON.stringify(translation));
        currentTranslation = JSON.parse(JSON.stringify(translation));
        hasModification = false;
        opsCard.style.display = '';
        compareCard.style.display = '';
        renderCompareCards(translation, translation);
        resultCard.style.display = '';
        updateReadingFrameLabel(translation);
        updateSeqHighlight(translation, false);
        renderDetailTable(translation);
        updateOpsMini();
        renderNcbiCdsPanel();
    }
    function performTranslation() {
        const raw = dnaInput.value;
        const ncbiData = parseNcbiGenBank(raw);
        inputAlert.innerHTML = ''; resultAlert.innerHTML = ''; opsAlert.innerHTML = '';
        if (ncbiData && ncbiData.cdsEntries.length) {
            const entry = ncbiData.cdsEntries[0];
            currentNcbiCdsEntries = ncbiData.cdsEntries;
            currentNcbiCdsIndex = 0;
            currentGeneInfo = ncbiData.geneInfo || null;
            inputAlert.innerHTML = `<div class="alert alert-info">🧬 检测到 NCBI GenBank 内容，已解析 ${ncbiData.cdsEntries.length} 个 CDS。</div>`;
            applySelectedNcbiCds(entry);
            return;
        }
        const cleaned = cleanSequence(raw);
        if (!cleaned) { inputAlert.innerHTML = '<div class="alert alert-info">💡 请输入DNA序列。</div>'; resetAll(); return; }
        if (cleaned.length < 3) { inputAlert.innerHTML = '<div class="alert alert-warning">⚠️ 碱基不足3个。</div>'; resetAll(); return; }
        const translation = translateSequence(cleaned, isStrictMode?0:currentOffset, isStrictMode);
        if (translation.error) { inputAlert.innerHTML = '<div class="alert alert-error">🚫 未找到起始密码子ATG！</div>'; resetAll(); return; }
        currentNcbiCdsEntries = []; currentNcbiCdsIndex = 0; currentGeneInfo = null; renderNcbiCdsPanel();
        originalCleanedSeq = cleaned; currentCleanedSeq = cleaned;
        originalTranslation = JSON.parse(JSON.stringify(translation));
        currentTranslation = JSON.parse(JSON.stringify(translation));
        hasModification = false;
        opsCard.style.display = '';
        compareCard.style.display = '';
        renderCompareCards(translation, translation);
        resultCard.style.display = '';
        updateReadingFrameLabel(translation);
        updateSeqHighlight(translation, false);
        renderDetailTable(translation);
        updateOpsMini();
    }
    function resetAll() { resultCard.style.display='none'; compareCard.style.display='none'; opsCard.style.display='none'; seqHighlightContainer.classList.remove('visible'); currentNcbiCdsEntries=[]; currentNcbiCdsIndex=0; currentGeneInfo=null; renderNcbiCdsPanel(); originalCleanedSeq=''; currentCleanedSeq=''; originalTranslation=null; currentTranslation=null; }
    function updateReadingFrameLabel(trans) {
        const pos = trans.offset+1;
        readingFrameLabel.textContent = trans.strictMode ? `严格模式·起始密码子ATG 位置${pos}` : `自由模式·偏移+${currentOffset}`;
    }
    function updateSeqHighlight(trans, isMod) {
        seqHighlightRow.innerHTML = '';
        if (!trans) { seqHighlightRow.textContent = ''; seqHighlightContainer.classList.remove('visible'); return; }
        const seq = trans.cleanedSeq, start = trans.offset, results = trans.results;
        if (start>0) {
            for (let i=0;i<start;i+=3) {
                const span = document.createElement('span'); span.className = `seq-codon-block untranslated${isMod?' modified-zone':''}`;
                const chunk = seq.substring(i,Math.min(i+3,seq.length));
                span.textContent = chunk;
                span.title = `位置 ${i+1}-${Math.min(i+3,seq.length)}` + (chunk.length < 3 ? ` (${chunk.length}碱基)` : '');
                seqHighlightRow.appendChild(span);
            }
        }
        results.forEach(r => {
            const span = document.createElement('span');
            let cls = 'seq-codon-block translated'; if (r.isStart) cls+=' start-codon'; else if (r.isStop) cls+=' stop-codon';
            if (isMod) cls+=' modified-zone'; span.className = cls;
            span.title = `位置 ${r.position}-${r.position+2} · ${r.codon}→${r.fullName}`;
            span.textContent = r.codon;
            seqHighlightRow.appendChild(span);
        });
        const used = start+results.length*3;
        if (trans.remainingBases>0 && !trans.stopEncountered) {
            for (let i=used;i<seq.length;i+=3) {
                const span = document.createElement('span'); span.className = `seq-codon-block remaining${isMod?' modified-zone':''}`;
                const chunk = seq.substring(i,Math.min(i+3,seq.length));
                span.textContent = chunk;
                span.title = `位置 ${i+1}-${Math.min(i+3,seq.length)}` + (chunk.length < 3 ? ` (${chunk.length}碱基)` : '');
                seqHighlightRow.appendChild(span);
            }
        }
        if (!seqHighlightRow.childElementCount) {
            const em = document.createElement('span'); em.style.color = '#94a3b8'; em.textContent = '无序列'; seqHighlightRow.appendChild(em);
        }
        seqHighlightContainer.classList.add('visible');
    }
    function renderDetailTable(trans) {
        detailTableBody.innerHTML = '';
        if (!trans) return;
        trans.results.forEach(r => {
            const tr = document.createElement('tr');
            if (r.isStart) tr.className = 'highlight-start'; else if (r.isStop) tr.className = 'highlight-stop';
            const cls = (r.isStop||r.category==='stop')?'stop-chip':(categoryClassMap[r.category]||'aa-hydrophobic');
            const tdPos = document.createElement('td'); tdPos.textContent = r.position;
            const tdCodon = document.createElement('td'); tdCodon.className='codon-cell'; tdCodon.textContent = r.codon;
            const tdName = document.createElement('td'); tdName.className='clickable-aa'; tdName.textContent = r.fullName;
            const tdThree = document.createElement('td'); tdThree.textContent = r.threeLetter;
            const tdOne = document.createElement('td');
            const chip = document.createElement('span'); chip.className = `aa-chip ${cls}`; chip.style.width='22px'; chip.style.height='22px'; chip.style.fontSize='0.7rem'; chip.textContent = r.isStop?'⏹':r.oneLetter;
            tdOne.appendChild(chip);
            const tdCat = document.createElement('td'); tdCat.textContent = r.categoryCN||'';
            const tdTag = document.createElement('td');
            if (r.isStart) { const s = document.createElement('span'); s.className='tag tag-start'; s.textContent='起始'; tdTag.appendChild(s); }
            else if (r.isStop) { const s = document.createElement('span'); s.className='tag tag-stop'; s.textContent='终止'; tdTag.appendChild(s); }
            tr.appendChild(tdPos); tr.appendChild(tdCodon); tr.appendChild(tdName); tr.appendChild(tdThree); tr.appendChild(tdOne); tr.appendChild(tdCat); tr.appendChild(tdTag);
            tr.addEventListener('click',()=>openAAModal(r.oneLetter||'*'));
            detailTableBody.appendChild(tr);
        });
    }
    function renderCompareCards(orig, mod) {
        if (!orig && !mod) { compareCard.style.display='none'; return; }
        compareCard.style.display = '';
        renderSingleCompare(origAaChipsRow, origStatsRow, origNoResult, orig, 'orig');
        renderSingleCompare(modAaChipsRow, modStatsRow, modNoResult, mod, 'mod');
        if (orig && mod && hasModification) highlightDiff(orig, mod);
    }
    function renderSingleCompare(chipsRow, statsRow, noResult, trans, prefix) {
        chipsRow.innerHTML = ''; statsRow.innerHTML = '';
        if (!trans || !trans.results.length) { noResult.style.display='block'; return; }
        noResult.style.display = 'none';
        const results = trans.results;
        results.forEach((r,idx) => {
            const chip = document.createElement('span');
            const letter = r.oneLetter||'?';
            if (r.isStop) { chip.className='aa-chip stop-chip'; chip.textContent='⏹'; }
            else { chip.className = `aa-chip ${categoryClassMap[r.category]||'aa-hydrophobic'}`; chip.textContent = letter; }
            chip.title = `位置 ${r.position}-${r.position+2} · ${r.codon}→${r.fullName}`;
            chip.addEventListener('click',()=>openAAModal(letter));
            chip.dataset.codonIdx = idx;
            chipsRow.appendChild(chip);
        });
        const startCodon = results.find(r=>r.isStart);
        const startPos = startCodon ? startCodon.position : null;
        const aaCount = {}; let stopC=0;
        results.forEach(r=>{ if(r.isStop) stopC++; else if(r.oneLetter) aaCount[r.oneLetter]=(aaCount[r.oneLetter]||0)+1; });
        statsRow.innerHTML = `<span class="stat-pill"><span class="dot" style="background:#0891b2;"></span>密码子:${results.length}</span><span class="stat-pill"><span class="dot" style="background:#10b981;"></span>种类:${Object.keys(aaCount).length}</span><span class="stat-pill"><span class="dot" style="background:#ef4444;"></span>终止:${stopC}</span>${startPos?`<span class="stat-pill"><span class="dot" style="background:#3b82f6;"></span>起始位置:${startPos}</span>`:''}`;
    }
    function alignAASequences(seq1, seq2) {
        const m = seq1.length, n = seq2.length;
        const match = 1, mismatch = -1, gap = -1;
        const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
        for (let i = 1; i <= m; i++) dp[i][0] = i * gap;
        for (let j = 1; j <= n; j++) dp[0][j] = j * gap;
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                const scoreDiag = dp[i-1][j-1] + (seq1[i-1] === seq2[j-1] ? match : mismatch);
                const scoreUp = dp[i-1][j] + gap;
                const scoreLeft = dp[i][j-1] + gap;
                dp[i][j] = Math.max(scoreDiag, scoreUp, scoreLeft);
            }
        }
        const align1 = [], align2 = [];
        let i = m, j = n;
        while (i > 0 || j > 0) {
            if (i > 0 && j > 0 && dp[i][j] === dp[i-1][j-1] + (seq1[i-1] === seq2[j-1] ? match : mismatch)) {
                align1.push(seq1[i-1]);
                align2.push(seq2[j-1]);
                i--; j--;
            } else if (i > 0 && dp[i][j] === dp[i-1][j] + gap) {
                align1.push(seq1[i-1]);
                align2.push('-');
                i--;
            } else {
                align1.push('-');
                align2.push(seq2[j-1]);
                j--;
            }
        }
        align1.reverse();
        align2.reverse();
        return { align1, align2 };
    }

    function highlightDiff(orig, mod) {
        [origAaChipsRow, modAaChipsRow].forEach(row => {
            row.querySelectorAll('.aa-chip').forEach(chip => chip.classList.remove('diff-highlight'));
        });

        const oRes = orig.results;
        const mRes = mod.results;
        const mChips = modAaChipsRow.querySelectorAll('.aa-chip');

        const getAA = r => r.isStop ? '*' : r.oneLetter;
        const origAAs = oRes.map(getAA);
        const modAAs = mRes.map(getAA);

        const { align1, align2 } = alignAASequences(origAAs, modAAs);

        const modHighlight = new Array(modAAs.length).fill(false);
        let modIdx = 0;
        for (let k = 0; k < align2.length; k++) {
            const aa2 = align2[k];
            const aa1 = align1[k];
            if (aa2 !== '-') {
                if (aa1 === '-' || aa1 !== aa2) {
                    modHighlight[modIdx] = true;
                }
                modIdx++;
            }
        }

        mChips.forEach((chip, j) => {
            if (j < modHighlight.length && modHighlight[j]) {
                chip.classList.add('diff-highlight');
            }
        });
}
    function applySequenceOperation() {
        if (!originalCleanedSeq) { const eDiv = document.createElement('div'); eDiv.className='alert alert-error'; eDiv.textContent='请先翻译原始序列。'; opsAlert.appendChild(eDiv); return; } opsAlert.textContent = '';
        opsAlert.innerHTML = '';
        const type = opsType.value, seq = currentCleanedSeq, seqLen = seq.length;
        let posStart = parseInt(opsPosStart.value), posEnd = parseInt(opsPosEnd.value);
        if (isNaN(posStart) || posStart<1 || posStart>seqLen+1) { const err = document.createElement('div'); err.className='alert alert-error'; err.textContent=`起始位置超出1~${seqLen+1}。`; opsAlert.appendChild(err); return; }
        if (type==='delete') {
            if (isNaN(posEnd) || posEnd<1 || posEnd>seqLen) { const err = document.createElement('div'); err.className='alert alert-error'; err.textContent=`结束位置超出1~${seqLen}。`; opsAlert.appendChild(err); return; }
            if (posStart > posEnd) {
                [posStart, posEnd] = [posEnd, posStart];
                opsPosStart.value = posStart; opsPosEnd.value = posEnd;
                const infoDiv = document.createElement('div'); infoDiv.className='alert alert-info'; infoDiv.textContent='↕️ 起始位置大于结束位置，已自动交换。'; opsAlert.appendChild(infoDiv);
            }
        }
        let newSeq = seq, msg = '';
        const idx0 = posStart-1;
        if (type==='insert') {
            const insertSeq = cleanSequence(opsInsertSeq.value);
            if (!insertSeq) { const err = document.createElement('div'); err.className='alert alert-error'; err.textContent='请输入要插入的序列。'; opsAlert.appendChild(err); return; }
            newSeq = seq.substring(0,idx0) + insertSeq + seq.substring(idx0);
            msg = `✅ INS: 已在位置${posStart}前插入${insertSeq.length}碱基。`;
        } else if (type==='delete') {
            newSeq = seq.substring(0,idx0) + seq.substring(posEnd);
            msg = `✅ DEL: 已缺失位置${posStart}~${posEnd}（共${posEnd-posStart+1}碱基）。`;
        } else if (type==='replace') {
            if (posStart > seqLen) { const err = document.createElement('div'); err.className='alert alert-error'; err.textContent=`替换位置超出序列长度${seqLen}。`; opsAlert.appendChild(err); return; }
            const rawBase = opsInsertSeq.value.trim().toUpperCase();
            if (!rawBase || !/^[ATCG]$/.test(rawBase)) { const err = document.createElement('div'); err.className='alert alert-error'; err.textContent='请输入单个有效碱基（A/T/C/G）。'; opsAlert.appendChild(err); return; }
            const oldBase = seq.charAt(idx0);
            newSeq = seq.substring(0, idx0) + rawBase + seq.substring(posStart);
            msg = `✅ SNP: 已将位置${posStart}的 ${oldBase} 替换为 ${rawBase}。`;
        }
        const successDiv = document.createElement('div'); successDiv.className='alert alert-success'; successDiv.textContent = msg; opsAlert.appendChild(successDiv);
        if (newSeq.length<3) { const warnDiv = document.createElement('div'); warnDiv.className='alert alert-warning'; warnDiv.textContent='⚠️ 操作后序列不足3碱基。'; opsAlert.appendChild(warnDiv); currentCleanedSeq=newSeq; currentTranslation=null; hasModification=true; updateAfterMod(); return; }
        currentCleanedSeq = newSeq;
        const trans = translateSequence(newSeq, isStrictMode?0:currentOffset, isStrictMode);
        if (trans.error) { const errDiv = document.createElement('div'); errDiv.className='alert alert-error'; errDiv.textContent='🚫 操作后序列缺少ATG！'; opsAlert.appendChild(errDiv); currentTranslation=null; hasModification=true; updateAfterMod(); return; }
        currentTranslation = trans; hasModification = true;
        updateAfterMod();
    }
    function updateAfterMod() {
        if (currentTranslation) {
            updateSeqHighlight(currentTranslation, hasModification);
            renderDetailTable(currentTranslation);
            resultCard.style.display = '';
        } else resultCard.style.display = 'none';
        renderCompareCards(originalTranslation, currentTranslation);
        compareCard.style.display = '';
        updateOpsMini();
        if (currentTranslation) updateReadingFrameLabel(currentTranslation);
        compareCard.scrollIntoView({behavior:'smooth',block:'start'});
    }
    function updateOpsMini() {
        if (!hasModification && originalCleanedSeq===currentCleanedSeq) { opsResultMini.style.display='none'; return; }
        opsResultMini.style.display = '';
        opsResultMini.textContent = '';
        const origLabel = document.createElement('strong'); origLabel.textContent='原始：';
        const origSpan = document.createElement('span'); origSpan.style.color='#64748b'; origSpan.textContent = originalCleanedSeq||'—';
        const arrow = document.createTextNode(' → ');
        const curLabel = document.createElement('strong'); curLabel.textContent='当前：';
        const curSpan = document.createElement('span'); curSpan.style.color='#6d28d9'; curSpan.textContent = currentCleanedSeq||'—';
        const lenText = document.createTextNode(` (${(currentCleanedSeq||'').length}碱基)`);
        opsResultMini.appendChild(origLabel); opsResultMini.appendChild(origSpan); opsResultMini.appendChild(arrow); opsResultMini.appendChild(curLabel); opsResultMini.appendChild(curSpan); opsResultMini.appendChild(lenText);
    }
    function resetToOriginal() {
        if (!originalCleanedSeq) return;
        currentCleanedSeq = originalCleanedSeq;
        currentTranslation = originalTranslation ? JSON.parse(JSON.stringify(originalTranslation)) : null;
        hasModification = false;
        opsAlert.textContent=''; const infoDiv = document.createElement('div'); infoDiv.className='alert alert-info'; infoDiv.textContent='↺ 已重置为原始序列。'; opsAlert.appendChild(infoDiv);
        opsInsertSeq.value = ''; opsPosStart.value=1; opsPosEnd.value=1; opsType.value='insert';
        opsPosEndGroup.style.display='none'; opsSeqGroup.style.display='flex';
        updateSeqHighlight(currentTranslation, false);
        renderDetailTable(currentTranslation);
        resultCard.style.display = '';
        compareCard.style.display = '';
        renderCompareCards(originalTranslation, originalTranslation);
        updateOpsMini();
        if (currentTranslation) updateReadingFrameLabel(currentTranslation);
        resultCard.scrollIntoView({behavior:'smooth',block:'start'});
    }
    function openAAModal(letter) {
        const d = aaDetailsData[letter];
        if (!d) { if (letter==='*'||letter==='⏹') { renderModal(aaDetailsData['*']); showModal(); return; } showToast('暂无详情'); return; }
        renderModal(d); showModal();
    }
    function renderModal(d) {
        const cls = categoryClassMap[d.category]||'aa-hydrophobic', stop = d.isStop||d.category==='stop';
        modalBodyContent.innerHTML = '';
        const hero = document.createElement('div'); hero.className='modal-aa-hero';
        const big = document.createElement('div'); big.className = `modal-aa-big-letter ${cls}`; big.textContent = stop ? '⏹' : (d.oneLetter || '');
        const meta = document.createElement('div');
        const h3 = document.createElement('h3'); h3.textContent = d.nameCN + ' ';
        const small = document.createElement('small'); small.textContent = d.oneLetter || '';
        h3.appendChild(small);
        const enDiv = document.createElement('div'); enDiv.style.color='#94a3b8'; enDiv.style.fontStyle='italic'; enDiv.textContent = `${d.nameEN} · ${d.threeLetter}`;
        meta.appendChild(h3); meta.appendChild(enDiv);
        hero.appendChild(big); hero.appendChild(meta);
        modalBodyContent.appendChild(hero);
        if (d.imageSrc) {
            const imgEl = document.createElement('img'); imgEl.className='modal-aa-image'; imgEl.src = `./AAPic/${d.imageSrc}`;
            imgEl.onerror = function(){ this.style.display='none'; placeholder.style.display='block'; };
            const placeholder = document.createElement('div'); placeholder.className='modal-image-placeholder'; placeholder.textContent = `📷 将${d.imageSrc}放在 AAPic 目录`;
            modalBodyContent.appendChild(imgEl); modalBodyContent.appendChild(placeholder);
        } else {
            const placeholder = document.createElement('div'); placeholder.className='modal-image-placeholder'; placeholder.style.display='block'; placeholder.textContent = '📷 暂无结构图';
            modalBodyContent.appendChild(placeholder);
        }
        const infoGrid = document.createElement('div'); infoGrid.className='modal-info-grid';
        function addInfo(label, val){ const cell = document.createElement('div'); const lbl = document.createElement('div'); lbl.className='info-label'; lbl.textContent=label; const v = document.createElement('div'); v.className='info-value'; v.textContent = val; cell.appendChild(lbl); cell.appendChild(v); infoGrid.appendChild(cell); }
        addInfo('分类', d.categoryCN);
        addInfo('分子量', d.molecularWeight + ' g/mol');
        addInfo('等电点', d.isoelectricPoint);
        addInfo('极性', d.polarity);
        addInfo('亲疏水性', d.hydropathy);
        addInfo('结构', d.structure);
        modalBodyContent.appendChild(infoGrid);
        const desc = document.createElement('div'); desc.className='modal-description'; desc.innerHTML = d.description || '';
        modalBodyContent.appendChild(desc);
        const codonSec = document.createElement('div');
        const secLabel = document.createElement('div'); secLabel.className='section-label'; secLabel.style.fontSize='0.7rem'; secLabel.style.color='#94a3b8'; secLabel.textContent='对应密码子';
        const tags = document.createElement('div'); tags.className='modal-codon-tags';
        (d.codons||[]).forEach(c=>{ const sp = document.createElement('span'); sp.className = 'modal-codon-tag'; sp.textContent = c; tags.appendChild(sp); });
        codonSec.appendChild(secLabel); codonSec.appendChild(tags); modalBodyContent.appendChild(codonSec);

    }
    function showModal(){aaModalOverlay.style.display='flex';document.body.style.overflow='hidden';}
    function hideModal(){aaModalOverlay.style.display='none';document.body.style.overflow='';}
    modalCloseBtn.addEventListener('click',hideModal);
    aaModalOverlay.addEventListener('click',e=>{if(e.target===aaModalOverlay)hideModal();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&aaModalOverlay.style.display==='flex')hideModal();});
    btnTranslate.addEventListener('click',performTranslation);
    dnaInput.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();performTranslation();}});
    // --- File upload handlers ---
    btnUpload.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (!file) return;
        handleFileLoad(file);
        fileInput.value = '';
    });

    // Drag-and-drop on textarea
    ['dragenter','dragover','dragleave','drop'].forEach(evt => {
        textareaWrapper.addEventListener(evt, e => { e.preventDefault(); e.stopPropagation(); });
    });
    ['dragenter','dragover'].forEach(evt => {
        textareaWrapper.addEventListener(evt, () => textareaWrapper.classList.add('drag-over'));
    });
    ['dragleave','drop'].forEach(evt => {
        textareaWrapper.addEventListener(evt, () => textareaWrapper.classList.remove('drag-over'));
    });
    textareaWrapper.addEventListener('drop', e => {
        const file = e.dataTransfer.files[0];
        if (file) handleFileLoad(file);
    });

    function handleFileLoad(file) {
        const reader = new FileReader();
        reader.onload = () => {
            const content = reader.result;
            let seq = content;
            // Handle FASTA: strip header lines starting with >
            if (/^>/.test(content.trim())) {
                const lines = content.split(/[\n\r]+/);
                seq = lines.filter(l => !l.startsWith('>') && !l.startsWith(';')).join('');
                seq = seq.replace(/[^ATCGatcg]/g, '');
                showToast(`📄 已加载 FASTA（${seq.length} 碱基）`);
            } else if (isLikelyGenBank(content)) {
                seq = content;
                showToast(`📄 已加载 GenBank 文件（${(content.match(/[\n\r]/g)||[]).length} 行）`);
            } else {
                showToast(`📄 已加载文件（${seq.length} 字符）`);
            }
            dnaInput.value = seq;
            dnaInput.dispatchEvent(new Event('input'));
            resetAll();
            if (seq.length >= 3) performTranslation();
        };
        reader.readAsText(file);
    }

    btnClear.addEventListener('click',()=>{dnaInput.value='';charCount.textContent='0 个有效碱基';inputAlert.textContent='';resetAll();dnaInput.focus();showToast('已清空');});
    btnApplyOps.addEventListener('click',applySequenceOperation);
    btnResetOps.addEventListener('click',resetToOriginal);
    btnCopyAA.addEventListener('click',()=>{
        if(!currentTranslation?.results.length){showToast('无序列');return;}
        const seq=currentTranslation.results.map(r=>r.isStop?'*':r.oneLetter).join('');
        function fallbackCopy(s){const ta=document.createElement('textarea');ta.value=s;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);}        
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(seq).then(()=>showToast('✅已复制')).catch(()=>{fallbackCopy(seq);showToast('✅已复制（已降级）');});
        } else { fallbackCopy(seq); showToast('✅已复制（已降级）'); }
    });
    let toastTimer; function showToast(m){clearTimeout(toastTimer);toast.textContent=m;toast.classList.add('show');toastTimer=setTimeout(()=>toast.classList.remove('show'),2000);}    
    dnaInput.focus(); charCount.textContent = '0 个有效碱基';
})();
