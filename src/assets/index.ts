const assets = import.meta.glob(["./*.png", "./*.svg"], { eager: true });

export default assets;