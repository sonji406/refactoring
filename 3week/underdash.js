/*
 *
 * ✅작성되어 있지 않은 함수들의 내용을 완성해 주세요!
 *
 * ⛔️이미 작성이 완료된 함수의 내용은 수정/삭제하지 마세요.
 * ⛔️이미 작성이 완료된 함수의 내용은 반드시 이해하셔야 합니다.
 *
 */

const _ = {};

/**
 *
 * "identity"
 *
 * https://lodash.com/docs/4.17.15#identity
 *
 */
_.identity = function (val) {
  return val;
};
/**
 *
 * "each"
 *
 * https://lodash.com/docs/4.17.15#forEach
 *
 * 자바스크립트 배열의 forEach 메소드와 거의 동일한 함수입니다.
 *
 */
_.each = function (collection, iterator) {
  if (Array.isArray(collection)) {
    for (const [index, value] of collection.entries()) {
      iterator(value, index, collection);
    }
  }

  if (!Array.isArray(collection)) {
    const collectionKeys = Object.keys(collection);

    for (let i = 0; i < collectionKeys.length; i++) {
      const collectionKey = collectionKeys[i];
      const collectionValue = collection[collectionKey];

      iterator(collectionKey, collectionValue);
    }
  }
};

/**
 *
 * [수정하지 마세요.] "indexOf"
 *
 * https://lodash.com/docs/4.17.15#indexOf
 *
 * 자바스크립트 배열의 indexOf 메소드와 거의 동일한 함수입니다.
 *
 */
_.indexOf = function (array, target) {
  let result = -1;

  _.each(array, function (item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });

  return result;
};

/**
 *
 * "map"
 *
 * https://lodash.com/docs/4.17.15#map
 *
 * 자바스크립트 배열의 map 메소드와 거의 동일한 함수입니다.
 *
 */
_.map = function (collection, iterator) {
  if (!Array.isArray(collection)) {
    return;
  }
  const resultArray = [];

  //   for (let [index, value] of collection.entries()) {
  //     resultArray.push(iterator(collection[index], index, collection));
  //   }
  _.each(collection, function(value, index, collection) {
    resultArray.push(iterator(value, index, collection));
  });

  return resultArray;
};

/**
 *
 * "reduce"
 *
 * https://lodash.com/docs/4.17.15#reduce
 *
 * 자바스크립트 배열의 reduce 메소드와 거의 동일한 함수입니다.
 *
 * 아래 한글 MDN 문서에서 매개변수, 반환값, 작동방식 부분을 반드시 꼼꼼히 읽고 이해한 후, 도전하세요.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 */
_.reduce = function (collection, iterator, accumulator) {
  if (!Array.isArray(collection)) {
    return;
  }

  let index = 0;

  if (accumulator === undefined) {
    accumulator = collection[index];
    index++;
  }

  // for (let i = index; i < collection.length; i++) {
  //   accumulator = iterator(accumulator, collection[i]);
  // }

  _.each(collection, function(value, i) {
    if (i >= index) {
      accumulator = iterator(accumulator, value);
    }
  });

  return accumulator;
};

/**
 *
 * [수정하지 마세요] "includes"
 *
 * 자바스크립트 배열의 includes 메소드와 거의 동일한 함수입니다.
 *
 * `reduce`가 성공적으로 완성된다면, `includes` 또한 통과됩니다.
 * 만약 `includes` 테스트가 실패한다면, `reduce`에 작성한 로직이 잘못 되었을 수 있습니다.
 *
 */
_.includes = function (collection, target) {
  // TIP: Many iteration problems can be most easily expressed in
  // terms of reduce(). Here's a freebie to demonstrate!
  return _.reduce(
    collection,
    function (wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    },
    false
  );
};

/**
 *
 * "flatten"
 *
 * https://lodash.com/docs/4.17.15#flatten
 *
 *
 */
_.flatten = function (nestedArray) {
  if (!Array.isArray(nestedArray)) {
    return;
  }
  const result = [];

  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      const flattenArray = _.flatten(nestedArray[i]);

      result.push(...flattenArray);
    } else {
      result.push(nestedArray[i]);
    }
  }

  return result;
};

/**
 *
 * "extend"
 *
 * https://lodash.com/docs/4.17.15#assignIn
 *
 *
 */
_.extend = function (obj, ...args) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return;
  }
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    for (const key in arg) {
      if (arg.hasOwnProperty(key)) {
        obj[key] = arg[key];
      }
    }
  }

  return obj;
};

/**
 *
 * "throttle"
 *
 * https://lodash.com/docs/4.17.15#throttle
 *
 *
 */
_.throttle = function (func, wait) {
  let lastCallTime;
  return function throttleFunction() {
    // 현재 시간을 가져옵니다.
    let currentTime = Date.now();
    // 마지막으로 func를 호출한 시간과 현재 시간의 차이를 계산합니다.
    let timeDiff = currentTime - lastCallTime;
    // timeDiff가 wait보다 크거나 같으면 func를 호출할 수 있습니다.
    if (!lastCallTime || timeDiff >= wait) {
      // func를 바로 호출합니다.
      func();
      // lastCallTime을 현재 시간으로 업데이트합니다.
      lastCallTime = currentTime;
      // timeout 변수에 타이머 ID를 할당합니다.
      let timeout = setTimeout(() => {
        // timeout 변수를 null로 설정합니다.
        timeout = null;
      }, wait);
    }
  };
};


/**
 *
 * "memoize"
 *
 * https://lodash.com/docs/4.17.15#memoize
 *
 *
 */
_.memoize = function (func) {

};

export default _;
