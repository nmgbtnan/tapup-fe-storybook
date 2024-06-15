

export const createCardProfile = () => {
  if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
    const data = {
      profile: {
        name: '',
        postion: '',
        bio: '',
        coverPhoto: '',
        profilePhoto: '',
      },
      hasData: false
    }
    localStorage.setItem('card', JSON.stringify(data));
  }
}
export const getCardProfile = (key: string) => {
  if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  }
}

export const updateCardProfile = (key: string, data: any) => {
  if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(data));
  }
}