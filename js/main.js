'use strict';

{

  // videosの取得
  const videos = document.querySelector('.videos');

  // videoidの取得
  const a = document.getElementById('a');
  const b = document.getElementById('b');
  const c = document.getElementById('c');
  const d = document.getElementById('d');
  const e = document.getElementById('e');
  const f = document.getElementById('f');
  const g = document.getElementById('g');
  const h = document.getElementById('h');
  const i = document.getElementById('i');
  const j = document.getElementById('j');
  const k = document.getElementById('k');
  const l = document.getElementById('l');
  const m = document.getElementById('m');
  const n = document.getElementById('n');
  const o = document.getElementById('o');
  const p = document.getElementById('p');

  // ボタンの取得
  // const a1 = document.getElementById('a1');
  const b2 = document.getElementById('b2');
  const c3 = document.getElementById('c3');
  const d4 = document.getElementById('d4');
  const e5 = document.getElementById('e5');
  const f6 = document.getElementById('f6');
  const g7 = document.getElementById('g7');
  const h8 = document.getElementById('h8');
  const i9 = document.getElementById('i9');
  const j10 = document.getElementById('j10');
  const k11 = document.getElementById('k11');
  const l12 = document.getElementById('l12');
  const m13 = document.getElementById('m13');
  const n14 = document.getElementById('n14');
  const o15 = document.getElementById('o15');
  const p16 = document.getElementById('p16');
  const q17 = document.getElementById('q17');
  const b2a1 = document.getElementById('b2a1');
  const c3a1 = document.getElementById('c3a1');
  const d4a1 = document.getElementById('d4a1');
  const e5a1 = document.getElementById('e5a1');
  const f6a1 = document.getElementById('f6a1');
  const f6b2 = document.getElementById('f6b2');
  const h8c3 = document.getElementById('h8c3');
  const i9c3 = document.getElementById('i9c3');
  const j10d4 = document.getElementById('j10d4');

  function handleWindowFocusChange() {
    if (document.hidden) {
      videos.pause(); // タブが非アクティブになったらビデオを一時停止
    } else {
      videos.play(); // タブがアクティブになったらビデオを再生
    }
  }

  // タブの可視性が変更された時にイベントハンドラを呼び出す
  window.addEventListener('visibilitychange', handleWindowFocusChange);

  // id="a"
  a.addEventListener('timeupdate', () => {
    const currentTime = a.currentTime;

    if (currentTime >= 88) {
      b2.style.display = 'block';
    } else {
      b2.style.display = 'none';
    }

    if (currentTime >= 93) {
      c3.style.display = 'block';
    } else {
      c3.style.display = 'none';
    }

    if (currentTime >= 99) {
      d4.style.display = 'block';
    } else {
      d4.style.display = 'none';
    }

    if (currentTime >= 103) {
      e5.style.display = 'block';
    } else {
      e5.style.display = 'none';
    }

    if (currentTime >= 133) {
      a.pause();
    }

    b2.addEventListener('click', () => {
      b2.style.display = 'none';
      c3.style.display = 'none';
      d4.style.display = 'none';
      e5.style.display = 'none';
      a.style.display = 'none';
      a.pause();
      b.style.display = 'block';
      b.load();
    });

    if (b.style.display === 'block') {
      b2.style.display = 'none';
      c3.style.display = 'none';
      d4.style.display = 'none';
      e5.style.display = 'none';
    }

    c3.addEventListener('click', () => {
      b2.style.display = 'none';
      c3.style.display = 'none';
      d4.style.display = 'none';
      e5.style.display = 'none';
      a.style.display = 'none';
      a.pause();
      c.style.display = 'block';
      c.load();
    });

    if (c.style.display === 'block') {
      b2.style.display = 'none';
      c3.style.display = 'none';
      d4.style.display = 'none';
      e5.style.display = 'none';
    }

    d4.addEventListener('click', () => {
      b2.style.display = 'none';
      c3.style.display = 'none';
      d4.style.display = 'none';
      e5.style.display = 'none';
      a.style.display = 'none';
      a.pause();
      d.style.display = 'block';
      d.load();
    });

    if (d.style.display === 'block') {
      b2.style.display = 'none';
      c3.style.display = 'none';
      d4.style.display = 'none';
      e5.style.display = 'none';
    }

    e5.addEventListener('click', () => {
      b2.style.display = 'none';
      c3.style.display = 'none';
      d4.style.display = 'none';
      e5.style.display = 'none';
      a.style.display = 'none';
      a.pause();
      e.style.display = 'block';
      e.load();
    });

    if (e.style.display === 'block') {
      b2.style.display = 'none';
      c3.style.display = 'none';
      d4.style.display = 'none';
      e5.style.display = 'none';
    }

  });

  // id="b"
  b.addEventListener('timeupdate', () => {
    const currentTime = b.currentTime;

    if (currentTime >= 150) {
      f6.style.display = 'block';
    } else {
      f6.style.display = 'none';
    }

    if (currentTime >= 154) {
      g7.style.display = 'block';
    } else {
      g7.style.display = 'none';
    }

    if (currentTime >= 164) {
      b2a1.style.display = 'block';
    } else {
      b2a1.style.display = 'none';
    }

    if (currentTime >= 183) {
      b.pause();
    }

    f6.addEventListener('click', () => {
      f6.style.display = 'none';
      g7.style.display = 'none';
      b2a1.style.display = 'none';
      b.style.display = 'none';
      b.pause();
      f.style.display = 'block';
      f.load();
    });

    if (f.style.display === 'block') {
      f6.style.display = 'none';
      g7.style.display = 'none';
      b2a1.style.display = 'none';
    }

    g7.addEventListener('click', () => {
      f6.style.display = 'none';
      g7.style.display = 'none';
      b2a1.style.display = 'none';
      b.style.display = 'none';
      b.pause();
      g.style.display = 'block';
      g.load();
    });

    if (g.style.display === 'block') {
      f6.style.display = 'none';
      g7.style.display = 'none';
      b2a1.style.display = 'none';
    }

    b2a1.addEventListener('click', () => {
      f6.style.display = 'none';
      g7.style.display = 'none';
      b2a1.style.display = 'none';
      b.style.display = 'none';
      b.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      f6.style.display = 'none';
      g7.style.display = 'none';
      b2a1.style.display = 'none';
    }

  });

  // id="c"
  c.addEventListener('timeupdate', () => {
    const currentTime = c.currentTime;

    if (currentTime >= 72) {
      h8.style.display = 'block';
    } else {
      h8.style.display = 'none';
    }

    if (currentTime >= 78) {
      i9.style.display = 'block';
    } else {
      i9.style.display = 'none';
    }

    if (currentTime >= 89) {
      c3a1.style.display = 'block';
    } else {
      c3a1.style.display = 'none';
    }

    if (currentTime >= 107) {
      c.pause();
    }

    h8.addEventListener('click', () => {
      h8.style.display = 'none';
      i9.style.display = 'none';
      c3a1.style.display = 'none';
      c.style.display = 'none';
      c.pause();
      h.style.display = 'block';
      h.load();
    });

    if (h.style.display === 'block') {
      h8.style.display = 'none';
      i9.style.display = 'none';
      c3a1.style.display = 'none';
    }

    i9.addEventListener('click', () => {
      h8.style.display = 'none';
      i9.style.display = 'none';
      c3a1.style.display = 'none';
      c.style.display = 'none';
      c.pause();
      i.style.display = 'block';
      i.load();
    });

    if (i.style.display === 'block') {
      h8.style.display = 'none';
      i9.style.display = 'none';
      c3a1.style.display = 'none';
    }

    c3a1.addEventListener('click', () => {
      h8.style.display = 'none';
      i9.style.display = 'none';
      c3a1.style.display = 'none';
      c.style.display = 'none';
      c.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      h8.style.display = 'none';
      i9.style.display = 'none';
      c3a1.style.display = 'none';
    }

  });

  // id="d"
  d.addEventListener('timeupdate', () => {
    const currentTime = d.currentTime;

    if (currentTime >= 70) {
      j10.style.display = 'block';
    } else {
      j10.style.display = 'none';
    }

    if (currentTime >= 75) {
      k11.style.display = 'block';
    } else {
      k11.style.display = 'none';
    }

    if (currentTime >= 81) {
      l12.style.display = 'block';
    } else {
      l12.style.display = 'none';
    }

    if (currentTime >= 92) {
      d4a1.style.display = 'block';
    } else {
      d4a1.style.display = 'none';
    }

    if (currentTime >= 110) {
      d.pause();
    }

    j10.addEventListener('click', () => {
      j10.style.display = 'none';
      k11.style.display = 'none';
      l12.style.display = 'none';
      d4a1.style.display = 'none';
      d.style.display = 'none';
      d.pause();
      j.style.display = 'block';
      j.load();
    });

    if (j.style.display === 'block') {
      j10.style.display = 'none';
      k11.style.display = 'none';
      l12.style.display = 'none';
      d4a1.style.display = 'none';
    }

    k11.addEventListener('click', () => {
      j10.style.display = 'none';
      k11.style.display = 'none';
      l12.style.display = 'none';
      d4a1.style.display = 'none';
      d.style.display = 'none';
      d.pause();
      k.style.display = 'block';
      k.load();
    });

    if (k.style.display === 'block') {
      j10.style.display = 'none';
      k11.style.display = 'none';
      l12.style.display = 'none';
      d4a1.style.display = 'none';
    }

    l12.addEventListener('click', () => {
      j10.style.display = 'none';
      k11.style.display = 'none';
      l12.style.display = 'none';
      d4a1.style.display = 'none';
      d.style.display = 'none';
      d.pause();
      l.style.display = 'block';
      l.load();
    });

    if (l.style.display === 'block') {
      j10.style.display = 'none';
      k11.style.display = 'none';
      l12.style.display = 'none';
      d4a1.style.display = 'none';
    }

    d4a1.addEventListener('click', () => {
      j10.style.display = 'none';
      k11.style.display = 'none';
      l12.style.display = 'none';
      d4a1.style.display = 'none';
      d.style.display = 'none';
      d.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      j10.style.display = 'none';
      k11.style.display = 'none';
      l12.style.display = 'none';
      d4a1.style.display = 'none';
    }

  });

  // id="e"
  e.addEventListener('timeupdate', () => {
    const currentTime = e.currentTime;

    if (currentTime >= 256) {
      q17.style.display = 'block';
    } else {
      q17.style.display = 'none';
    }

    if (currentTime >= 256) {
      f6a1.style.display = 'block';
    } else {
      f6a1.style.display = 'none';
    }

    if (currentTime >= 273) {
      e.pause();
    }

    q17.addEventListener('click', () => {
      q17.style.display = 'none';
      f6a1.style.display = 'none';
      e.style.display = 'none';
      e.pause();
    });

    if (e.style.display === 'none') {
      q17.style.display = 'none';
      f6a1.style.display = 'none';
    }

    f6a1.addEventListener('click', () => {
      q17.style.display = 'none';
      f6a1.style.display = 'none';
      e.style.display = 'none';
      e.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      q17.style.display = 'none';
      f6a1.style.display = 'none';
    }

  });

  // id="f"
  f.addEventListener('timeupdate', () => {
    const currentTime = f.currentTime;

    if (currentTime >= 338) {
      q17.style.display = 'block';
    } else {
      q17.style.display = 'none';
    }

    if (currentTime >= 338) {
      f6a1.style.display = 'block';
    } else {
      f6a1.style.display = 'none';
    }

    if (currentTime >= 338) {
      f6b2.style.display = 'block';
    } else {
      f6b2.style.display = 'none';
    }

    if (currentTime >= 356) {
      f.pause();
    }

    q17.addEventListener('click', () => {
      q17.style.display = 'none';
      f6a1.style.display = 'none';
      f6b2.style.display = 'none';
      f.style.display = 'none';
      f.pause();
    });

    if (f.style.display === 'none') {
      q17.style.display = 'none';
      f6a1.style.display = 'none';
      f6b2.style.display = 'none';
    }

    f6a1.addEventListener('click', () => {
      q17.style.display = 'none';
      f6a1.style.display = 'none';
      f6b2.style.display = 'none';
      f.style.display = 'none';
      f.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      q17.style.display = 'none';
      f6a1.style.display = 'none';
      f6b2.style.display = 'none';
    }

    f6b2.addEventListener('click', () => {
      q17.style.display = 'none';
      f6a1.style.display = 'none';
      f6b2.style.display = 'none';
      f.style.display = 'none';
      f.pause();
      b.style.display = 'block';
      b.load();
    });

    if (b.style.display === 'block') {
      q17.style.display = 'none';
      f6a1.style.display = 'none';
      f6b2.style.display = 'none';
    }
  });

  // id="g"
  g.addEventListener('timeupdate', () => {
    const currentTime = g.currentTime;

    if (currentTime >= 183) {
      q17.style.display = 'block';
    } else {
      q17.style.display = 'none';
    }

    if (currentTime >= 183) {
      e5a1.style.display = 'block';
    } else {
      e5a1.style.display = 'none';
    }

    if (currentTime >= 183) {
      f6b2.style.display = 'block';
    } else {
      f6b2.style.display = 'none';
    }

    if (currentTime >= 201) {
      g.pause();
    }

    q17.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      f6b2.style.display = 'none';
      g.style.display = 'none';
      g.pause();
    });

    if (g.style.display === 'none') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      f6b2.style.display = 'none';
    }

    e5a1.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      f6b2.style.display = 'none';
      g.style.display = 'none';
      g.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      f6b2.style.display = 'none';
    }

    f6b2.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      f6b2.style.display = 'none';
      g.style.display = 'none';
      g.pause();
      b.style.display = 'block';
      b.load();
    });

    if (b.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      f6b2.style.display = 'none';
    }
  });

  // id="h"
  h.addEventListener('timeupdate', () => {
    const currentTime = h.currentTime;

    if (currentTime >= 21) {
      m13.style.display = 'block';
    } else {
      m13.style.display = 'none';
    }

    if (currentTime >= 24) {
      n14.style.display = 'block';
    } else {
      n14.style.display = 'none';
    }

    if (currentTime >= 33) {
      h8c3.style.display = 'block';
    } else {
      h8c3.style.display = 'none';
    }

    if (currentTime >= 52) {
      h.pause();
    }

    m13.addEventListener('click', () => {
      m13.style.display = 'none';
      n14.style.display = 'none';
      h8c3.style.display = 'none';
      h.style.display = 'none';
      h.pause();
      m.style.display = 'block';
      m.load();
    });

    if (m.style.display === 'block') {
      m13.style.display = 'none';
      n14.style.display = 'none';
      h8c3.style.display = 'none';
    }

    n14.addEventListener('click', () => {
      m13.style.display = 'none';
      n14.style.display = 'none';
      h8c3.style.display = 'none';
      h.style.display = 'none';
      h.pause();
      n.style.display = 'block';
      n.load();
    });

    if (n.style.display === 'block') {
      m13.style.display = 'none';
      n14.style.display = 'none';
      h8c3.style.display = 'none';
    }

    h8c3.addEventListener('click', () => {
      m13.style.display = 'none';
      n14.style.display = 'none';
      h8c3.style.display = 'none';
      h.style.display = 'none';
      h.pause();
      c.style.display = 'block';
      c.load();
    });

    if (c.style.display === 'block') {
      m13.style.display = 'none';
      n14.style.display = 'none';
      h8c3.style.display = 'none';
    }

  });

  // id="i"
  i.addEventListener('timeupdate', () => {
    const currentTime = i.currentTime;

    if (currentTime >= 68) {
      o15.style.display = 'block';
    } else {
      o15.style.display = 'none';
    }

    if (currentTime >= 68) {
      p16.style.display = 'block';
    } else {
      p16.style.display = 'none';
    }

    if (currentTime >= 68) {
      i9c3.style.display = 'block';
    } else {
      i9c3.style.display = 'none';
    }

    if (currentTime >= 83) {
      i.pause();
    }

    o15.addEventListener('click', () => {
      o15.style.display = 'none';
      p16.style.display = 'none';
      i9c3.style.display = 'none';
      i.style.display = 'none';
      i.pause();
      o.style.display = 'block';
      o.load();
    });

    if (o.style.display === 'block') {
      o15.style.display = 'none';
      p16.style.display = 'none';
      i9c3.style.display = 'none';
    }

    p16.addEventListener('click', () => {
      o15.style.display = 'none';
      p16.style.display = 'none';
      i9c3.style.display = 'none';
      i.style.display = 'none';
      i.pause();
      p.style.display = 'block';
      p.load();
    });

    if (p.style.display === 'block') {
      o15.style.display = 'none';
      p16.style.display = 'none';
      i9c3.style.display = 'none';
    }

    i9c3.addEventListener('click', () => {
      o15.style.display = 'none';
      p16.style.display = 'none';
      i9c3.style.display = 'none';
      i.style.display = 'none';
      i.pause();
      c.style.display = 'block';
      c.load();
    });

    if (c.style.display === 'block') {
      o15.style.display = 'none';
      p16.style.display = 'none';
      i9c3.style.display = 'none';
    }
  });

  // id="j"
  j.addEventListener('timeupdate', () => {
    const currentTime = j.currentTime;

    if (currentTime >= 186) {
      q17.style.display = 'block';
    } else {
      q17.style.display = 'none';
    }

    if (currentTime >= 186) {
      e5a1.style.display = 'block';
    } else {
      e5a1.style.display = 'none';
    }

    if (currentTime >= 186) {
      j10d4.style.display = 'block';
    } else {
      j10d4.style.display = 'none';
    }

    if (currentTime >= 203) {
      j.pause();
    }

    q17.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      j.style.display = 'none';
      j.pause();
    });

    if (j.style.display === 'none') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }

    e5a1.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      j.style.display = 'none';
      j.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }

    j10d4.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      j.style.display = 'none';
      j.pause();
      d.style.display = 'block';
      d.load();
    });

    if (d.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }
  });

  // id="k"
  k.addEventListener('timeupdate', () => {
    const currentTime = k.currentTime;

    if (currentTime >= 152) {
      q17.style.display = 'block';
    } else {
      q17.style.display = 'none';
    }

    if (currentTime >= 152) {
      e5a1.style.display = 'block';
    } else {
      e5a1.style.display = 'none';
    }

    if (currentTime >= 152) {
      j10d4.style.display = 'block';
    } else {
      j10d4.style.display = 'none';
    }

    if (currentTime >= 169) {
      k.pause();
    }

    q17.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      k.style.display = 'none';
      k.pause();
    });

    if (k.style.display === 'none') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }

    e5a1.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      k.style.display = 'none';
      k.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }

    j10d4.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      k.style.display = 'none';
      k.pause();
      d.style.display = 'block';
      d.load();
    });

    if (d.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }
  });

  // id="l"
  l.addEventListener('timeupdate', () => {
    const currentTime = l.currentTime;

    if (currentTime >= 172) {
      q17.style.display = 'block';
    } else {
      q17.style.display = 'none';
    }

    if (currentTime >= 172) {
      e5a1.style.display = 'block';
    } else {
      e5a1.style.display = 'none';
    }

    if (currentTime >= 172) {
      j10d4.style.display = 'block';
    } else {
      j10d4.style.display = 'none';
    }

    if (currentTime >= 189) {
      l.pause();
    }

    q17.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      l.style.display = 'none';
      l.pause();
    });

    if (l.style.display === 'none') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }

    e5a1.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      l.style.display = 'none';
      l.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }

    j10d4.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      l.style.display = 'none';
      l.pause();
      d.style.display = 'block';
      d.load();
    });

    if (d.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }
  });

  // id="m"
  m.addEventListener('timeupdate', () => {
    const currentTime = m.currentTime;

    if (currentTime >= 267) {
      q17.style.display = 'block';
    } else {
      q17.style.display = 'none';
    }

    if (currentTime >= 267) {
      e5a1.style.display = 'block';
    } else {
      e5a1.style.display = 'none';
    }

    if (currentTime >= 267) {
      j10d4.style.display = 'block';
    } else {
      j10d4.style.display = 'none';
    }

    if (currentTime >= 284) {
      m.pause();
    }

    q17.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      m.style.display = 'none';
      m.pause();
    });

    if (m.style.display === 'none') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }

    e5a1.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      m.style.display = 'none';
      m.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }

    j10d4.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      m.style.display = 'none';
      m.pause();
      h.style.display = 'block';
      h.load();
    });

    if (d.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }
  });

  // id="n"
  n.addEventListener('timeupdate', () => {
    const currentTime = n.currentTime;

    if (currentTime >= 278) {
      q17.style.display = 'block';
    } else {
      q17.style.display = 'none';
    }

    if (currentTime >= 278) {
      e5a1.style.display = 'block';
    } else {
      e5a1.style.display = 'none';
    }

    if (currentTime >= 278) {
      j10d4.style.display = 'block';
    } else {
      j10d4.style.display = 'none';
    }

    if (currentTime >= 295) {
      n.pause();
    }

    q17.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      n.style.display = 'none';
      n.pause();
    });

    if (n.style.display === 'none') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }

    e5a1.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      n.style.display = 'none';
      n.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }

    j10d4.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      n.style.display = 'none';
      n.pause();
      h.style.display = 'block';
      h.load();
    });

    if (d.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }
  });

  // id="o"
  o.addEventListener('timeupdate', () => {
    const currentTime = o.currentTime;

    if (currentTime >= 146) {
      q17.style.display = 'block';
    } else {
      q17.style.display = 'none';
    }

    if (currentTime >= 146) {
      e5a1.style.display = 'block';
    } else {
      e5a1.style.display = 'none';
    }

    if (currentTime >= 146) {
      j10d4.style.display = 'block';
    } else {
      j10d4.style.display = 'none';
    }

    if (currentTime >= 163) {
      o.pause();
    }

    q17.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      o.style.display = 'none';
      o.pause();
    });

    if (o.style.display === 'none') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }

    e5a1.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      o.style.display = 'none';
      o.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }

    j10d4.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      o.style.display = 'none';
      o.pause();
      i.style.display = 'block';
      i.load();
    });

    if (d.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }
  });

  // id="p"
  p.addEventListener('timeupdate', () => {
    const currentTime = p.currentTime;

    if (currentTime >= 240) {
      q17.style.display = 'block';
    } else {
      q17.style.display = 'none';
    }

    if (currentTime >= 240) {
      e5a1.style.display = 'block';
    } else {
      e5a1.style.display = 'none';
    }

    if (currentTime >= 240) {
      j10d4.style.display = 'block';
    } else {
      j10d4.style.display = 'none';
    }

    if (currentTime >= 256) {
      p.pause();
    }

    q17.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      p.style.display = 'none';
      p.pause();
    });

    if (p.style.display === 'none') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }

    e5a1.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      p.style.display = 'none';
      p.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }

    j10d4.addEventListener('click', () => {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
      p.style.display = 'none';
      p.pause();
      i.style.display = 'block';
      i.load();
    });

    if (d.style.display === 'block') {
      q17.style.display = 'none';
      e5a1.style.display = 'none';
      j10d4.style.display = 'none';
    }
  });

}