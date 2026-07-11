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
          btnTranslate = $('btnTranslate'), btnClear = $('btnClear'), btnExample = $('btnExample'),
          btnCopyAA = $('btnCopyAA'), readingFrameLabel = $('readingFrameLabel') || {style:{display:'none'}, textContent:''},
          readingFrameGroup = $('readingFrameGroup'),
          strictModeCheckbox = $('strictModeCheckbox'), seqHighlightContainer = $('seqHighlightContainer'),
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
        originalTranslation = null, currentTranslation = null, hasModification = false, isCodonGridView = true;

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
        opsPosEndGroup.style.display = (t==='delete'||t==='replace')?'flex':'none';
        opsSeqGroup.style.display = (t==='insert'||t==='replace')?'flex':'none';
        opsPosLabel.textContent = t==='insert' ? '插入位置(之前)' : '起始位置';
        $('opsSeqLabel').textContent = t==='replace' ? '替换序列' : '插入序列';
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
    function translateSequence(seq, offset, strict) {
        let start = offset, usedStrict = false;
        if (strict) {
            const idx = seq.indexOf('ATG'); if (idx === -1) return {error:'no_start_codon', cleanedSeq:seq};
            start = idx; usedStrict = true;
        }
        const results = []; let stopEnc = false, stopPos = -1;
        for (let i = start; i+3 <= seq.length; i+=3) {
            const codon = seq.substring(i,i+3), info = codonTable[codon];
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
        return {results, totalCodons:results.length, remainingBases:Math.max(0,seq.length-(start+results.length*3)),
                cleanedSeq:seq, offset:start, usedStrictStart:usedStrict, stopEncountered:stopEnc, stopPosition:stopPos, strictMode:strict};
    }
    function performTranslation() {
        const cleaned = cleanSequence(dnaInput.value);
        inputAlert.innerHTML = ''; resultAlert.innerHTML = ''; opsAlert.innerHTML = '';
        if (!cleaned) { inputAlert.innerHTML = '<div class="alert alert-info">💡 请输入DNA序列。</div>'; resetAll(); return; }
        if (cleaned.length < 3) { inputAlert.innerHTML = '<div class="alert alert-warning">⚠️ 碱基不足3个。</div>'; resetAll(); return; }
        const translation = translateSequence(cleaned, isStrictMode?0:currentOffset, isStrictMode);
        if (translation.error) { inputAlert.innerHTML = '<div class="alert alert-error">🚫 未找到起始密码子ATG！</div>'; resetAll(); return; }
        originalCleanedSeq = cleaned; currentCleanedSeq = cleaned;
        originalTranslation = JSON.parse(JSON.stringify(translation));
        currentTranslation = JSON.parse(JSON.stringify(translation));
        hasModification = false;
        opsCard.style.display = '';
        compareCard.style.display = '';
        renderCompareCards(translation, translation);       // ← 首次翻译隐藏对比卡片
        resultCard.style.display = '';
        updateReadingFrameLabel(translation);
        updateSeqHighlight(translation, false);
        renderDetailTable(translation);
        updateOpsMini();
    }
    function resetAll() { resultCard.style.display='none'; compareCard.style.display='none'; opsCard.style.display='none'; seqHighlightContainer.classList.remove('visible'); originalCleanedSeq=''; currentCleanedSeq=''; originalTranslation=null; currentTranslation=null; }
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
                span.textContent = seq.substring(i,Math.min(i+3,seq.length));
                seqHighlightRow.appendChild(span);
            }
        }
        results.forEach(r => {
            const span = document.createElement('span');
            let cls = 'seq-codon-block translated'; if (r.isStart) cls+=' start-codon'; else if (r.isStop) cls+=' stop-codon';
            if (isMod) cls+=' modified-zone'; span.className = cls;
            span.title = `${r.codon}→${r.fullName}`; span.textContent = r.codon;
            seqHighlightRow.appendChild(span);
        });
        const used = start+results.length*3;
        if (trans.remainingBases>0 && !trans.stopEncountered) {
            for (let i=used;i<seq.length;i+=3) {
                const span = document.createElement('span'); span.className = `seq-codon-block remaining${isMod?' modified-zone':''}`;
                span.textContent = seq.substring(i,Math.min(i+3,seq.length));
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
            chip.title = `${r.codon}→${r.fullName}`;
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
        if (type==='delete'||type==='replace') {
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
            msg = `✅ 已在位置${posStart}前插入${insertSeq.length}碱基。`;
        } else if (type==='delete') {
            newSeq = seq.substring(0,idx0) + seq.substring(posEnd);
            msg = `✅ 已剔除位置${posStart}~${posEnd}（共${posEnd-posStart+1}碱基）。`;
        } else if (type==='replace') {
            const replaceSeq = cleanSequence(opsInsertSeq.value);
            if (!replaceSeq) { const err = document.createElement('div'); err.className='alert alert-error'; err.textContent='请输入要替换的序列。'; opsAlert.appendChild(err); return; }
            const segment = seq.substring(idx0, posEnd);
            newSeq = seq.substring(0,idx0) + replaceSeq + seq.substring(posEnd);
            msg = `✅ 已替换位置${posStart}~${posEnd}（${segment.length}碱基）为${replaceSeq.length}碱基。`;
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
    btnClear.addEventListener('click',()=>{dnaInput.value='';charCount.textContent='0 个有效碱基';inputAlert.textContent='';resetAll();dnaInput.focus();showToast('已清空');});
    btnExample.addEventListener('click',()=>{dnaInput.value='ATGGCCGTGACCTGATAGCCGGA';charCount.textContent='24 个有效碱基';resetAll();currentOffset=0;readingFrameGroup.querySelectorAll('button').forEach(b=>b.classList.remove('active'));readingFrameGroup.querySelector('[data-offset="0"]').classList.add('active');showToast('已加载示例');setTimeout(performTranslation,150);});
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
