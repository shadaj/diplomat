import wasm from "./wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.mjs"

const ICU4XFixedDecimalFormat_destroy_registry = new FinalizationRegistry(underlying => {
  wasm.ICU4XFixedDecimalFormat_destroy(underlying);
});

export class ICU4XFixedDecimalFormat {
  constructor(underlying) {
    this.underlying = underlying;
  }

  static new(locale, provider) {
    const diplomat_out = (() => {
      const out = new ICU4XFixedDecimalFormat(wasm.ICU4XFixedDecimalFormat_new(locale.underlying, provider.underlying));
      ICU4XFixedDecimalFormat_destroy_registry.register(out, out.underlying);
      return out;
    })();
    return diplomat_out;
  }

  format_write(value) {
    const diplomat_out = diplomatRuntime.withWriteable(wasm, (writeable) => wasm.ICU4XFixedDecimalFormat_format_write(this.underlying, value.underlying, writeable));
    return diplomat_out;
  }
}

const ICU4XFixedDecimal_destroy_registry = new FinalizationRegistry(underlying => {
  wasm.ICU4XFixedDecimal_destroy(underlying);
});

export class ICU4XFixedDecimal {
  constructor(underlying) {
    this.underlying = underlying;
  }

  static new(v) {
    const diplomat_out = (() => {
      const out = new ICU4XFixedDecimal(wasm.ICU4XFixedDecimal_new(v));
      ICU4XFixedDecimal_destroy_registry.register(out, out.underlying);
      return out;
    })();
    return diplomat_out;
  }

  multiply_pow10(power) {
    wasm.ICU4XFixedDecimal_multiply_pow10(this.underlying, power)
  }

  negate() {
    wasm.ICU4XFixedDecimal_negate(this.underlying)
  }

  to_string() {
    const diplomat_out = diplomatRuntime.withWriteable(wasm, (writeable) => wasm.ICU4XFixedDecimal_to_string(this.underlying, writeable));
    return diplomat_out;
  }
}

const ICU4XDataProvider_destroy_registry = new FinalizationRegistry(underlying => {
  wasm.ICU4XDataProvider_destroy(underlying);
});

export class ICU4XDataProvider {
  constructor(underlying) {
    this.underlying = underlying;
  }

  static new_static() {
    const diplomat_out = (() => {
      const out = new ICU4XDataProvider(wasm.ICU4XDataProvider_new_static());
      ICU4XDataProvider_destroy_registry.register(out, out.underlying);
      return out;
    })();
    return diplomat_out;
  }
}

const ICU4XLocale_destroy_registry = new FinalizationRegistry(underlying => {
  wasm.ICU4XLocale_destroy(underlying);
});

export class ICU4XLocale {
  constructor(underlying) {
    this.underlying = underlying;
  }

  static new(name) {
    let name_diplomat_bytes = (new TextEncoder()).encode(name);
    let name_diplomat_ptr = wasm.diplomat_alloc(name_diplomat_bytes.length);
    let name_diplomat_buf = new Uint8Array(wasm.memory.buffer, name_diplomat_ptr, name_diplomat_bytes.length);
    name_diplomat_buf.set(name_diplomat_bytes, 0);
    const diplomat_out = (() => {
      const out = new ICU4XLocale(wasm.ICU4XLocale_new(name_diplomat_ptr, name_diplomat_bytes.length));
      ICU4XLocale_destroy_registry.register(out, out.underlying);
      return out;
    })();
    wasm.diplomat_free(name_diplomat_ptr, name_diplomat_bytes.length);
    return diplomat_out;
  }
}
