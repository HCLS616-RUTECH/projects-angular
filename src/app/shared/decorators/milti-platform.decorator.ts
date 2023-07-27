type TMultiPlatformConfig = {
    width: number;
}

export function MultiPlatform(config: TMultiPlatformConfig) {
    return (target: object, propName: string) => {
        let _value: boolean;

        window.addEventListener('resize', (e) => {
            _value = window.innerWidth < config.width;
        });

        Object.defineProperty(target, propName, {
            get() {
                return _value;
            },
            set(_: any) {
                _value = window.innerWidth < config.width;
            }
        });
    };
}
