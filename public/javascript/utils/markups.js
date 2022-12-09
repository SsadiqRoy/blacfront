export function dbMovieCard(movie, type = 'movie') {
  const markup = `
  <div class="dbmovie-card" data-card-id="${movie.id}">
    <div class="dbmovie-card__image">
      <img src="${movie.landscape}" alt="${movie.title}" />
    </div>
    <div class="dbmovie-card__info">
      <h2>
        ${movie.title} -
        <span><i class="fas fa-star"></i> ${movie.rating}</span>
      </h2>
      <p>${movie.description}</p>
    </div>
    <div class="dbmovie-card__buttons">
    <a href="/${type}/${movie.title.split(' ').join('-')}/${movie.id}" title="view"><i class="fas fa-eye"></i></a>
    <a href="/dashboard/update${type}/${movie.id}" title="edit"><i class="far fa-edit"></i></a>
    <a title="delete"><i class="fas fa-trash delete-item"></i></a>
  </div>
  </div>
  `;

  return markup;
}

export function notificationCard(note) {
  const markup = `
  <div class="notification-card" data-notification-id="${note.id}">
  <div class="notification-card__cover">
    <div class="notification-card__notification">
      <h2> ${note.on} </h2>
      <p>${note.message} </p>
    </div>
    <div class="notification-card__buttons">
      <a title="marked unviewed"><i class="fas fa-eye-slash"></i></a>
      <a title="delete"><i class="fas fa-trash delete-item"></i></a>
    </div>
  </div>
</div>
  `;

  return markup;
}

//
export function scheduleCard(schedule) {
  const time = new Date(schedule.date).getTime();
  const timeNow = Date.now();
  const date = new Date(schedule.date).toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  const due =
    time <= timeNow
      ? `
  <div class="schedule-card__time schedule-card__time--due">
    <span>${date}</span>
  </div>
  `
      : '';

  const markup = `
  <div class="schedule-card"  data-schedule-id="${schedule.id}">
    <div class="schedule-card__cover">
      <div class="schedule-card__schedule">
        <h2>${date}</h2>
        <p>${schedule.message}</p>
      </div>
      <div class="schedule-card__buttons">
        <a title="marked unviewed"><i class="fas fa-eye-slash"></i></a>
        <a href="/dashboard/updateschedule/${schedule.id}", title="edit"><i class="far fa-edit"></i></a>
        <a title="delete"><i class="fas fa-trash delete-item"></i></a>
      </div>
    </div>
    ${due}
  </div>
  `;

  return markup;
}

export function movieCard(movie, type) {
  const markup = `
    <div class="movie-card card-game">
      <a href="/${type}/${movie.title.toLowerCase().split(' ').join('-')}/${movie.id}">
        <img src="${movie.portrait}" alt="${movie.title}" />
        <h2>
          ${movie.title}
          <span><i class="fas fa-star"></i> ${movie.rating}</span>
        </h2>
      </a>
    </div>
  `;

  return markup;
}

export function gameCard(game) {
  const markup = `
    <div class="game-card">
      <a href="/game/${game.title.toLowerCase().split(' ').join('-')}/${game.id}" class="game-card__cover">
        <div class="game-card__image" style="background-image: url(${game.landscape})"></div>
        <div class="game-card__title">${game.title}</div>
      </a>
    </div>
  `;
  return markup;
}
