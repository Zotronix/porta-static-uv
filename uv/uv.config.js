self.__uv$config = {
    prefix: '/static/',
    bare:'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/Zotronix/porta-static-uv/main/uv/uv.handler.js',
    bundle: '/Zotronix/porta-static-uv/main/uv/uv.bundle.js',
    config: '/Zotronix/porta-static-uv/main/uv/uv.config.js',
    sw: '/Zotronix/porta-static-uv/main/uv/uv.sw.js',
};
