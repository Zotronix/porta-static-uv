self.__uv$config = {
    prefix: '/static/',
    bare:'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://cdn.jsdelivr.net/gh/Zotronix/porta-static-uv@main/uv/uv.handler.js',
    bundle: 'https://cdn.jsdelivr.net/gh/Zotronix/porta-static-uv@main/uv/uv.bundle.js',
    config: 'https://cdn.jsdelivr.net/gh/Zotronix/porta-static-uv@main/uv/uv.config.js',
    sw: 'https://cdn.jsdelivr.net/gh/Zotronix/porta-static-uv@main/uv/uv.sw.js',
};
