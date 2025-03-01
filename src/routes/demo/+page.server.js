export const load = async (event) => {
    console.log(event);
    return {
        user: event.locals.user,
        cica: 1
    }
}

export const actions = {
    default: async (event) => {
        var data = await event.request.formData();
        console.log(data.get('cica'));
    }
}