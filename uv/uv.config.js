self.__uv$config = {
    prefix: '/static/',
    bare:'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://raw.githubusercontent.com/Zotronix/porta-static-uv/uv/uv.handler.js',
    bundle: 'https://raw.githubusercontent.com/Zotronix/porta-static-uv/uv/uv.bundle.js',
    config: 'https://raw.githubusercontent.com/Zotronix/porta-static-uv/uv/uv.config.js',
    sw: 'https://raw.githubusercontent.com/Zotronix/porta-static-uv/uv/uv.sw.js',
};
